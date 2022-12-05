import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { StructuredText } from 'react-datocms'
import { Button, Container } from 'react-bootstrap'

import ImageFormat from '~components/ImageFormat'

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

  const [showRequestDemoModal, setShowRequestDemoModal] = useState(false)

  return (
    <section {...rest} className={clsx(s.sectionHero, className)}>
      <Container className={clsx(s.container, s.containerMain)}>
        <div className={s.colLeft}>
          <h1 className={s.heading}>{heading}</h1>
          <StructuredText data={text.value} />
          <div className="btn-group">
            {!primaryButton.hide && (
              <Button
                variant="primary"
                onClick={() => setShowRequestDemoModal(true)}
              >
                {primaryButton.text}
              </Button>
            )}
            {!secondaryButton.hide && (
              <Button
                variant="outline-secondary"
                as="a"
                href={secondaryButton.url}
                rel={secondaryButton.rel}
                target={secondaryButton.target}
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
