import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Button, Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import ImageFormat from '~components/ui/ImageFormat'

import * as s from './SectionBanner.module.scss'

const SectionBanner = (props) => {
  const { heading, text, buttonText, buttonLink, image, className, ...rest } =
    props

  return (
    <Container as="section" {...rest} className={className}>
      <div className={s.sectionBanner}>
        <div className={s.infoWrapper}>
          <h3 className={s.heading}>{heading}</h3>
          <StructuredText data={text.value} />
          <Button variant="secondary" as={Link} to={buttonLink}>
            {buttonText}
          </Button>
        </div>
        <ImageFormat
          file={image}
          alt="banner illustration"
          className={s.image}
        />
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
