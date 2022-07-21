import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Link } from 'gatsby'
import { StructuredText } from 'react-datocms'
import { Button, Container } from 'react-bootstrap'

import ImageFormat from '~components/ImageFormat'

import PartnersMarquee from './components/PartnersMaruqee'
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

  return (
    <section {...rest} className={cn(s.sectionHero, className)}>
      <Container className={cn(s.container, s.containerMain)}>
        <div className={s.colLeft}>
          <h1 className={s.heading}>{heading}</h1>
          <StructuredText data={text.value} />
          <div className="btn-group">
            <Button variant="primary" as={Link} to={primaryButton.url}>
              {primaryButton.text}
            </Button>
            <Button
              variant="outline-secondary"
              as={Link}
              to={secondaryButton.url}
            >
              {secondaryButton.text}
            </Button>
          </div>
        </div>
        <ImageFormat
          alt="hero"
          file={image}
          width={897}
          height={690}
          className={s.imgHero}
        />
      </Container>
      <div className={s.blockPartners}>
        <Container className={s.container}>
          <span className={s.textPartners}>{partnersHeading}</span>
        </Container>
        <PartnersMarquee partners={partners} />
      </div>
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
