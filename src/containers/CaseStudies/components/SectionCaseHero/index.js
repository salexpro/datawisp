import React from 'react'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import PropTypes from 'prop-types'
import cn from 'classnames'

import ImageFormat from '~components/ImageFormat'

import * as s from './SectionCaseHero.module.scss'

const SectionCaseHero = (props) => {
  const { heading, text, image, className, ...rest } = props

  return (
    <Container {...rest} className={cn(s.sectionCaseHero, className)}>
      <div className={s.colLeft}>
        <h1>{heading}</h1>
        <StructuredText data={text.value} />
      </div>
      <div className={s.imgHero}>
        <ImageFormat alt="hero" file={image} />
      </div>
    </Container>
  )
}

SectionCaseHero.defaultProps = {
  className: '',
}

SectionCaseHero.propTypes = {
  className: PropTypes.string,
}

export default SectionCaseHero
