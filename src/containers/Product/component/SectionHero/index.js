import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Link } from 'gatsby'
import { Button, Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import ImageFormat from '~components/ImageFormat'

import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const { heading, text, image, buttonText, buttonLink, className, ...rest } =
    props

  return (
    <Container as="section" {...rest} className={cn(s.sectionHero, className)}>
      <div className={s.colLeft}>
        <h1>{heading}</h1>
        <StructuredText data={text.value} />
        <Button variant="primary" as={Link} to={buttonLink}>
          {buttonText}
        </Button>
      </div>
      <ImageFormat file={image} alt="Product hero" />
    </Container>
  )
}

SectionHero.defaultProps = {
  className: '',
}

SectionHero.propTypes = {
  className: PropTypes.string,
}

export default SectionHero
