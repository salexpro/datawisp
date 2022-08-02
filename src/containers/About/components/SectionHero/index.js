import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container } from 'react-bootstrap'

import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const { className, ...rest } = props

  return (
    <Container {...rest} as="section" className={cn(s.sectionHero, className)}>
      <h1>
        <span className={s.textGradientPrimary}>Our mission</span>{' '}
        is&nbsp;to&nbsp;make working with data as easy as sending an email
      </h1>
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
