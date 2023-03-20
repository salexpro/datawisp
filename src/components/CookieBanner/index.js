import React, { useState, useEffect } from 'react'
import { Toast, Button, ToastContainer } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import { useCookies } from 'react-cookie'
import { useLocation } from '@reach/router'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'

import { GOOGLE_ANALYTIC_COOKIE_KEY, PRIVACY_POLICY_LINK } from './constants'
import { isGDPR } from './utils'

const CookieBanner = () => {
  const location = useLocation()
  const [cookies, setCookie] = useCookies([GOOGLE_ANALYTIC_COOKIE_KEY])
  const [showBanner, setShowBanner] = useState(false)

  const handleOnClick = (value) => {
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    setCookie(GOOGLE_ANALYTIC_COOKIE_KEY, value, { expires })
    setShowBanner(false)
    initializeAndTrack(location)
  }

  const initializeBanner = async () => {
    const res = await isGDPR()
    setShowBanner(cookies[GOOGLE_ANALYTIC_COOKIE_KEY] === undefined && res)
  }

  useEffect(() => {
    initializeBanner()
  }, [])

  return (
    <ToastContainer>
      <Toast show={showBanner}>
        <Toast.Header>
          <StaticImage
            src="./assets/cookie.png"
            alt="cookie"
            width={48}
            height={48}
            placeholder="none"
          />

          <div>
            We use third-party{' '}
            <a href={PRIVACY_POLICY_LINK} target="_blank" rel="noreferrer">
              cookies
            </a>{' '}
            in order to personalize your site experience.
          </div>
        </Toast.Header>
        <Toast.Body>
          <Button onClick={() => handleOnClick(true)}>Accept</Button>
          <Button
            variant="outline-secondary"
            onClick={() => handleOnClick(false)}
          >
            Decline
          </Button>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default CookieBanner
