/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'
import { useLocation } from '@reach/router'
import { StructuredText } from 'react-datocms'
import { Button, Container } from 'react-bootstrap'
import { useCookies } from 'react-cookie'

import ImageFormat from '~components/ImageFormat'
import { GOOGLE_TAG_KEY } from '~constants'
import { gtagReportConversion } from '~utils/analytics'

import ModalRequestDemo from '../ModalRequestDemo'
import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const {
    heading,
    text,
    image,
    caption,
    button,
    popup,
    className,
    utm,
    ...rest
  } = props

  const [cookies] = useCookies([GOOGLE_TAG_KEY])
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
      <Container className={s.container}>
        <div className={s.content}>
          <h1 className={s.heading}>{heading}</h1>
          <div className={s.lead}>
            <StructuredText data={text.value} />
          </div>
          <div className={cn('btn-group', s.buttons)}>
            <Button variant="primary" onClick={handeRequestDemo}>
              {button.text}
            </Button>
          </div>
          <span className={s.caption}>{caption}</span>
        </div>
        <ImageFormat
          alt="hero"
          file={image}
          className={s.imgHero}
          objectFit="contain"
        />
      </Container>

      <ModalRequestDemo
        show={showRequestDemoModal}
        onHide={setShowRequestDemoModal}
        {...popup}
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
