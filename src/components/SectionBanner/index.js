import React from 'react'
import PropTypes from 'prop-types'
import { Button, Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import * as s from './SectionBanner.module.scss'

const SectionBanner = (props) => {
  const { heading, text, buttonText, buttonLink, className, ...rest } = props

  return (
    <Container as="section" {...rest} className={className}>
      <div className={s.banner}>
        <h3 className={s.heading}>{heading}</h3>
        <StructuredText data={text.value} />
        <Button
          as="a"
          variant="secondary"
          href={buttonLink.url}
          rel={buttonLink.rel}
          target={buttonLink.target}
          className={s.btn}
        >
          {buttonText}
        </Button>
      </div>
    </Container>
  )
}

SectionBanner.defaultProps = {
  className: '',
}

SectionBanner.propTypes = {
  className: PropTypes.string,
}

export default SectionBanner
