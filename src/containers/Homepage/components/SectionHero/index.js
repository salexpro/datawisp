/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useRef } from 'react'
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
    message,
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

  const sectionRef = useRef(null)
  const requestRef = useRef(null)

  useEffect(() => {
    setShowRequestDemoModal(isModal)

    let [currentScale, velocity] = [0.83, 0]
    const drag = 0
    const strength = 0.1

    const zoomImage = () => {
      const position = window.scrollY / (sectionRef.current.offsetHeight / 4)

      const targetScale = Math.min(1, 0.83 + position * (1 - 0.83))

      const diff = targetScale - currentScale

      velocity *= drag
      velocity += diff * strength
      currentScale += velocity

      sectionRef.current.style.setProperty('--scale', currentScale.toFixed(4))
      requestRef.current = requestAnimationFrame(zoomImage)
    }

    requestRef.current = requestAnimationFrame(zoomImage)

    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  const handeRequestDemo = () => {
    gtagReportConversion(cookies)
    // setShowRequestDemoModal(true)
  }

  return (
    <section
      {...rest}
      className={cn(s.sectionHero, className)}
      ref={sectionRef}
    >
      <Container className={s.container}>
        <div className={s.content}>
          <div className={s.message}>
            <StructuredText data={message.value} />
          </div>
          <h1 className={s.heading}>{heading}</h1>
          <div className={s.lead}>
            <StructuredText data={text.value} />
          </div>
          <div className={cn('btn-group', s.buttons)}>
            <Button
              variant="primary"
              as="a"
              id={button.linkId}
              target={button.target}
              rel={button.rel || null}
              href={`${button.url}${utm ? `?${utm}` : ''}`}
              onClick={handeRequestDemo}
            >
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
