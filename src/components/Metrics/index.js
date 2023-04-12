import React from 'react'
import { Script } from 'gatsby'
import { useCookies } from 'react-cookie'

import { GOOGLE_ANALYTIC_COOKIE_KEY, GOOGLE_ADS_COOKIE_KEY } from '~constants'

const Metrics = () => {
  const [cookies] = useCookies([
    GOOGLE_ANALYTIC_COOKIE_KEY,
    GOOGLE_ADS_COOKIE_KEY,
  ])

  return (
    <>
      {cookies[GOOGLE_ADS_COOKIE_KEY] === 'true' && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11145057970" />
          <Script id="google-ads">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11145057970');`}
          </Script>
        </>
      )}

      {cookies[GOOGLE_ANALYTIC_COOKIE_KEY] === 'true' && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-0TN5EWHPVY" />
          <Script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0TN5EWHPVY');`}
          </Script>
        </>
      )}
    </>
  )
}

export default Metrics
