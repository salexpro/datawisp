/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Script } from 'gatsby'
import SSRProvider from 'react-bootstrap/SSRProvider'

import '~styles/app.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import SVGDefs from './components/SVGDefs'

import { layout } from './Layout.module.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // TODO: SSRProvider in starter
  return (
    <SSRProvider>
      <div className={layout}>
        <Header siteTitle={data.site.siteMetadata?.title} />
        <main className="main">{children}</main>
        <Footer siteTitle={data.site.siteMetadata?.title} />
        <SVGDefs />
      </div>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KQ66FE4RFZ"
        strategy="post-hydrate"
      />
      <Script id="gtag-config" strategy="post-hydrate" forward={[`gtag`]}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
          gtag('config', 'G-KQ66FE4RFZ')
      `}
      </Script>
    </SSRProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
