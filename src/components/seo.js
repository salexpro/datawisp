/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import ogImage from '~img/og-image.png'

const SEO = ({ description, title, image, twitterCard, ogType, children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          domain
        }
      }
    }
  `)

  const defaultTitle = site.siteMetadata?.title
  const titleTemplate = title ? `${title} – ${defaultTitle}` : defaultTitle
  const metaDescription = description || site.siteMetadata.description
  const domain = site.siteMetadata?.domain

  const ogImageUrl =
    image?.src ||
    `${domain.includes('http') ? domain : `https://${domain}`}${ogImage}`

  return (
    <>
      <html lang="en" />
      <title>{titleTemplate}</title>
      <meta name="description" content={metaDescription} />
      {/* <link rel="alternate" hrefLang="x-default" href={domain} /> */}
      <meta property="og:locale" content="en_EN" />
      <meta name="og:title" content={titleTemplate} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content={ogType || 'website'} />
      <meta name="og:image" content={ogImageUrl} />
      <meta name="og:width" content={image?.width || '1200'} />
      <meta name="og:height" content={image?.height || '630'} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta
        name="twitter:card"
        content={twitterCard || 'summary_large_image'}
      />
      <meta name="twitter:title" content={titleTemplate} />
      <meta name="twitter:description" content={metaDescription} />

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
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      {children}
    </>
  )
}

SEO.defaultProps = {
  title: '',
  description: '',
  image: {
    src: '',
    height: 0,
    width: 0,
  },
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
}

export default SEO
