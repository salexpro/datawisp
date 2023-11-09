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

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Articles
  await createArticlePages({ actions, graphql, reporter })

  if (process.env.NODE_ENV === `development`) {
    const productTemplate = path.resolve(`src/templates/SVGPreview/index.jsx`)
    createPage({
      path: `/___svg`,
      component: productTemplate,
    })
  }
}

exports.createResolvers = ({
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
        resolve(source) {
          // console.log('----SOURCE----')
          // console.log(source)
          // console.log('----END SOURCE----')

          const url =
            source.provider === 'youtube'
              ? `https://img.youtube.com/vi/${source.providerUid}/maxresdefault.jpg`
              : source.thumbnailUrl

          return createRemoteFileNode({
            url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
