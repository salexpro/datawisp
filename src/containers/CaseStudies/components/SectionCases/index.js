import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Container } from 'react-bootstrap'

import CardCase from '~components/CardCase'

import * as s from './SectionCases.module.scss'

const SectionCases = (props) => {
  const { cases, className, ...rest } = props

  return (
    <Container {...rest} className={classNames(s.sectionCases, className)}>
      {cases?.map((item) => (
        <CardCase key={item.slug} {...item} />
      ))}
    </Container>
  )
}

SectionCases.defaultProps = {
  className: '',
}

SectionCases.propTypes = {
  className: PropTypes.string,
}

export default SectionCases
