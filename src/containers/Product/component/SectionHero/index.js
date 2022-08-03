import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Button, Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import ImageFormat from '~components/ImageFormat'

import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const { heading, text, image, buttonText, buttonLink, className, ...rest } =
    props

  const { url, ...linkProps } = buttonLink

  return (
    <Container
      as="section"
      {...rest}
      className={clsx(s.sectionHero, className)}
    >
      <div className={s.colLeft}>
        <h1>{heading}</h1>
        <StructuredText data={text.value} />
        <Button variant="primary" as="a" href={url} {...linkProps}>
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
