const rnd = () => Math.random().toString(36).substring(2, 3)

module.exports = {
  /*
  Experimental flags that increase DX and build times with different technics (may require to use `yarn clean` time to time)
  Current avaliable flags: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  */
  // flags: {
  //   FAST_DEV: true,
  // },
  trailingSlash: 'never',
  polyfill: false,
  siteMetadata: {
    title: `Datawisp`,
    description: `Datawisp is a no-code data exploration and analysis platform for web3 and web2. Our visual query builder lets you dig deep into your data and quickly find valuable insights to drive your business.`,
    domain: process.env.CF_PAGES_URL || 'datawisp.min.studio',
  },
  plugins: [
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-webpack-bundle-analyser-v2/
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        enable:
          // Cloudflare
          process.env.CF_PAGES_BRANCH === 'master' ||
          // Gatsby Cloud
          process.env.BRANCH === 'master',
        prefix: rnd(),
        suffix: rnd(),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `@gvrs/gatsby-transformer-blurhash`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-svgr-svgo`,
      options: {
        urlSvgOptions: [
          {
            test: /\.svg$/,
            urlLoaderOptions: {
              limit: 10,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
