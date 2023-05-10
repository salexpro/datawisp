/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { useLocation } from '@gatsbyjs/reach-router'
import { StructuredText } from 'react-datocms'
import { Button, Container } from 'react-bootstrap'
import { useCookies } from 'react-cookie'

import ImageFormat from '~components/ImageFormat'
import { GOOGLE_ADS_COOKIE_KEY, GOOGLE_ANALYTIC_COOKIE_KEY } from '~constants'
import { gtagReportConversion } from '~utils/analytics'

import PartnersMarquee from './components/PartnersMaruqee'
import ModalRequestDemo from '../ModalRequestDemo'
import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const {
    heading,
    text,
    image,
    primaryButton,
    secondaryButton,
    partnersHeading,
    partners,
    className,
    ...rest
  } = props

  const [cookies] = useCookies([
    GOOGLE_ANALYTIC_COOKIE_KEY,
    GOOGLE_ADS_COOKIE_KEY,
  ])
  const { hash } = useLocation()
  const isModal = hash === '#request-demo'

  const [showRequestDemoModal, setShowRequestDemoModal] = useState(false)

  useEffect(() => {
    setShowRequestDemoModal(isModal)
  }, [])

  const handeRequestDemo = () => {
    gtagReportConversion(cookies)
    setShowRequestDemoModal(true)
  }

  return (
    <section {...rest} className={cn(s.sectionHero, className)}>
      <Container className={cn(s.container, s.containerMain)}>
        <div className={s.colLeft}>
          <h1 className={s.heading}>{heading}</h1>
          <StructuredText data={text.value} />
          <div className="btn-group">
            {!primaryButton.hide && (
              <Button variant="primary" onClick={handeRequestDemo}>
                {primaryButton.text}
              </Button>
            )}
            {!secondaryButton.hide && (
              <Button
                variant="outline-secondary"
                href={secondaryButton.url}
                rel={secondaryButton.rel}
                target={secondaryButton.target}
                onClick={() => gtagReportConversion(cookies)}
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
        <ImageFormat
          alt="hero"
          file={image}
          width={897}
          height={690}
          className={s.imgHero}
          objectFit="contain"
        />
      </Container>
      {!!partners?.length && (
        <div className={s.blockPartners}>
          <Container className={s.container}>
            <span className={s.textPartners}>{partnersHeading}</span>
          </Container>
          <PartnersMarquee partners={partners} />
        </div>
      )}

      <ModalRequestDemo
        show={showRequestDemoModal}
        onHide={setShowRequestDemoModal}
      />
    </section>
  )
}

SectionHero.defaultProps = {
  className: undefined,
}

SectionHero.propTypes = {
  className: PropTypes.string,
}

export default SectionHero
