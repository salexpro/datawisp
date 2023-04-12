require('dotenv-flow').config()

module.exports = {
  /*
  Experimental flags that increase DX and build times with different technics (may require to use `yarn clean` time to time)
  Current available flags: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  */
  flags: {
    FAST_DEV: true,
  },
  trailingSlash: 'never',
  polyfill: false,
  siteMetadata: {
    title: `Datawisp`,
    description: `Datawisp is a no-code data exploration and analysis platform for web3 and web2. Our visual query builder lets you dig deep into your data and quickly find valuable insights to drive your business.`,
    domain:
      // Cloudflare
      process.env.CF_PAGES_URL ||
      // Vercel
      process.env.GATSBY_VERCEL_URL ||
      'datawisp.min.studio',
    siteUrl: `https://datawisp.io`,
  },
  plugins: [
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-webpack-bundle-analyser-v2/
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.GATSBY_DATOCMS_API_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://datawisp.matomo.cloud',
        siteUrl: 'https://datawisp.io',
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `datawisp.io`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://datawisp.io',
        sitemap: 'https://datawisp.io/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
