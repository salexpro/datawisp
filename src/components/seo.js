/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import ogImage from '~img/og-image.png'

const SEO = ({
  description,
  lang,
  meta,
  title,
  image,
  twitterCard,
  ogType,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            domain
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const domain = site.siteMetadata?.domain
  const titleTemplate = title ? `${title} – ${defaultTitle}` : defaultTitle

  const ogImageUrl =
    image ||
    `${domain.includes('http') ? domain : `https://${domain}`}${ogImage}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:locale`,
          content: `en_EN`,
        },
        {
          property: `og:title`,
          content: titleTemplate,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: ogType || `website`,
        },
        {
          property: `og:image`,
          content: ogImageUrl,
        },
        {
          property: `og:width`,
          content: `1200`,
        },
        {
          property: `og:height`,
          content: `630`,
        },
        {
          property: `twitter:image`,
          content: ogImageUrl,
        },
        {
          name: `twitter:card`,
          content: twitterCard || `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: titleTemplate,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'msapplication-TileColor',
          content: '#ffffff',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ].concat(meta)}
    >
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  title: '',
  image: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
}

export default SEO
