import React from 'react'
import { Script } from 'gatsby'
import { useCookies } from 'react-cookie'

import { GOOGLE_TAG_KEY } from '~constants'

const Metrics = () => {
  const [cookies] = useCookies([GOOGLE_TAG_KEY])

  return (
    cookies[GOOGLE_TAG_KEY] === 'true' && (
      <>
        {/* Google ads start */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11145057970" />
        <Script id="google-ads">
          {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11145057970');`}
        </Script>
        {/* Google ads end */}

        {/* Google analytics start */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-0TN5EWHPVY" />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0TN5EWHPVY');`}
        </Script>
        {/* Google analytics end */}

        {/* Signup start */}
        <Script id="signup">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TF5Z68D');`}</Script>
        {/* Signup end */}
      </>
    )
  )
}

export default Metrics
