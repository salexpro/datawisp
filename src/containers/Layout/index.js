/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@gatsbyjs/reach-router'
import { LiveChatWidget } from '@livechat/widget-react'

import CookieBanner from '~components/CookieBanner'
import Metrics from '~components/Metrics'
import ToastManager from '~components/ToastManager'
import '~styles/app.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import SVGDefs from './components/SVGDefs'

import { layout } from './Layout.module.scss'

const Layout = ({ children, headerPageData, footerPageData }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { search } = useLocation()

  const [utm, setUtm] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(search)

    const filtered = [...params.entries()]
      .filter(([k]) => k.includes('utm_'))
      .map(([k, v]) => `${k}=${v}`)
      .join('&')

    setUtm(filtered)
  }, [search])

  const childrenArray = Array.isArray(children) ? children : [children]

  return (
    <>
      <div className={layout}>
        <Header
          siteTitle={data.site.siteMetadata?.title}
          headerPageData={headerPageData}
          utm={utm}
        />
        <main className="main">
          {childrenArray.map((c, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`c${i}`}>
              {React.cloneElement(c, { utm })}
            </React.Fragment>
          ))}
        </main>
        <Footer
          siteTitle={data.site.siteMetadata?.title}
          footerPageData={footerPageData}
          utm={utm}
        />
        <SVGDefs />
      </div>

      <ToastManager />
      <CookieBanner />
      <Metrics />
      <LiveChatWidget license="16023825" group="0" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
