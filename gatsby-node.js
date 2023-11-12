/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path')
const { createRemoteFileNode } = require('gatsby-source-filesystem')
const RouteURL = require('./src/routes')

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~api': path.resolve(__dirname, 'src/axios'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~containers': path.resolve(__dirname, 'src/containers'),
        '~contexts': path.resolve(__dirname, 'src/contexts'),
        '~pages': path.resolve(__dirname, 'src/pages'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
        '~styles': path.resolve(__dirname, 'src/styles'),
        '~img': path.resolve(__dirname, 'src/assets/img'),
        '~fonts': path.resolve(__dirname, 'src/assets/fonts'),
        '~images': path.resolve(__dirname, 'src/images'),
        '~utils': path.resolve(__dirname, 'src/utils'),
        '~constants': path.resolve(__dirname, 'src/constants'),
        '~routes': path.resolve(__dirname, 'src/routes.js'),
      },
    },
  })

  /* Set ignoreOrder: true to remove warnings when using css modules */
  const config = getConfig()
  const miniCssExtractPlugin = config.plugins.find(
    (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
  )
  if (miniCssExtractPlugin) {
    miniCssExtractPlugin.options.ignoreOrder = true
  }
  actions.replaceWebpackConfig(config)
}

const createArticlePages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query AllArticles {
      allDatoCmsArticle {
        edges {
          node {
            # postType
            slug
            id
            originalId
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(
      `createArticlePages: Error while running GraphQL query.`
    )
    return
  }

  const articleTemplate = path.resolve(`src/templates/article.js`)

  result.data.allDatoCmsArticle.edges.forEach(({ node }) => {
    const { /* postType, */ slug, id, originalId } = node

    createPage({
      path: `${RouteURL.BLOG}/${slug}`,
      component: articleTemplate,
      context: {
        id,
        originalId,
        // postType,
      },
    })
  })
}

const createPersonaPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query AllPersonas {
      allDatoCmsPersonaPage {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(
      `createPersonasPages: Error while running GraphQL query.`
    )
    return
  }

  const personaTemplate = path.resolve(`src/templates/persona.js`)

  result.data.allDatoCmsPersonaPage.edges.forEach(({ node }) => {
    const { slug, id } = node

    createPage({
      path: `/${slug}`,
      component: personaTemplate,
      context: {
        id,
      },
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Articles
  await createPersonaPages({ actions, graphql, reporter })
  await createArticlePages({ actions, graphql, reporter })

  if (process.env.NODE_ENV === `development`) {
    const productTemplate = path.resolve(`src/templates/SVGPreview/index.jsx`)
    createPage({
      path: `/___svg`,
      component: productTemplate,
    })
  }
}

exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    DatoCmsVideoField: {
      image: {
        type: `File`,
        async resolve(source) {
          // console.log('----SOURCE----')
          // console.log(source)
          // console.log('----END SOURCE----')

          const url =
            source.provider === 'youtube'
              ? `https://img.youtube.com/vi/${source.providerUid}/maxresdefault.jpg`
              : source.thumbnailUrl

          try {
            const fileNode = await createRemoteFileNode({
              url,
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            })

            if (fileNode) {
              return fileNode
            }
          } catch (error) {
            // Handle the error here, you can log it or do something else
            console.error(`Error fetching remote file: ${error.message}`)
          }

          // Fallback to another URL if the first fetch fails
          try {
            const fallbackFileNode = await createRemoteFileNode({
              url: source.thumbnailUrl,
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            })

            if (fallbackFileNode) {
              return fallbackFileNode
            }
          } catch (fallbackError) {
            // Handle the fallback error here, log it or handle as needed
            console.error(
              `Error fetching fallback remote file: ${fallbackError.message}`
            )
          }

          return null // Return null if both attempts fail
        },
      },
    },
  })
}
