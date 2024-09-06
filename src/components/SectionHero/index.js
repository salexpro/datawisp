/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { useLocation } from '@gatsbyjs/reach-router'
import { StructuredText } from 'react-datocms'
import { Container } from 'react-bootstrap'
// import { useCookies } from 'react-cookie'

import MediaItem from '~components/ui/MediaItem'
import ButtonGroup from '~components/ui/ButtonGroup'
import Caption from '~components/ui/Caption'

// import { GOOGLE_TAG_KEY } from '~constants'
// import { gtagReportConversion } from '~utils/analytics'

import ModalRequestDemo from '~components/ModalRequestDemo'
import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const {
    message,
    heading,
    lead,
    text,
    image,
    caption,
    buttons,
    popup,
    className,
    utm,
    ...rest
  } = props

  // const [cookies] = useCookies([GOOGLE_TAG_KEY])
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
      const position = window.scrollY / (sectionRef.current.offsetHeight / 5)

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

  // const handeRequestDemo = () => {
  //   gtagReportConversion(cookies)
  //   // setShowRequestDemoModal(true)
  // }

  const isMessage = message?.value?.document?.children.some((child) =>
    child.children.some((subChild) => subChild.value !== '')
  )

  return (
    <section
      {...rest}
      className={cn(s.sectionHero, className)}
      ref={sectionRef}
    >
      <Container className={s.container}>
        <div className={cn(s.content, { [s.hasMessage]: isMessage })}>
          {isMessage && (
            <div className={s.message}>
              <StructuredText data={message.value} />
            </div>
          )}

          {heading?.value ? (
            <StructuredText data={heading.value} />
          ) : (
            <h1>{heading}</h1>
          )}

          {lead && (
            <div className={cn('h4', s.lead)}>
              <StructuredText data={lead.value} />
            </div>
          )}

          <div className={s.lead}>
            <StructuredText data={text.value} />
          </div>
        </div>
        {image && <MediaItem data={image} />}
        {buttons && <ButtonGroup data={buttons} utm={utm} ctaId="hero" />}

        {caption && <Caption>{caption}</Caption>}
      </Container>

      {popup && (
        <ModalRequestDemo
          show={showRequestDemoModal}
          onHide={setShowRequestDemoModal}
          {...popup}
        />
      )}
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
