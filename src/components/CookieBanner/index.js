import React, { useState, useEffect } from 'react'
import { Toast, Button, ToastContainer } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import { useCookies } from 'react-cookie'

import { GOOGLE_TAG_KEY } from '~constants'
import { hasCookies } from '~utils/analytics'

import { PRIVACY_POLICY_LINK } from './constants'
import { isGDPR } from './utils'

const CookieBanner = () => {
  const [cookies, setCookie] = useCookies([GOOGLE_TAG_KEY])
  const [showBanner, setShowBanner] = useState(false)

  const setAllCookies = (value) => {
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    setCookie(GOOGLE_TAG_KEY, value, { expires })
  }

  const handleOnClick = (value) => {
    setAllCookies(value)
    setShowBanner(false)
  }

  const initializeBanner = async () => {
    if (hasCookies(cookies)) return

    const res = await isGDPR()

    if (res) setShowBanner(true)
    else setAllCookies(true)
  }

  useEffect(() => {
    initializeBanner()
  }, [])

  return (
    <ToastContainer className="bottom-middle">
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
