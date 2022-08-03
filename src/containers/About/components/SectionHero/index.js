import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { StructuredText } from 'react-datocms'
import { Container } from 'react-bootstrap'

import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const { heading, className, ...rest } = props

  return (
    <Container {...rest} as="section" className={cn(s.sectionHero, className)}>
      <StructuredText data={heading.value} />
    </Container>
  )
}

SectionHero.defaultProps = {
  className: undefined,
}

SectionHero.propTypes = {
  className: PropTypes.string,
}

export default SectionHero
