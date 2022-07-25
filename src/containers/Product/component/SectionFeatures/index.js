import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import cn from 'classnames'

import CardCase from '~components/CardCase'

import FEATURES_DATA from './mock'
import * as s from './SectionFeatures.module.scss'

const SectionFeatures = (props) => {
  const { className, ...rest } = props

  return (
    <Container
      as="section"
      {...rest}
      className={cn(s.sectionFeatures, className)}
    >
      <h2 className={s.heading}>Features</h2>
      <p className={s.text}>
        Datawisp comes packed with features to help everyone on your team work
        effectively with data and drive your business forward.
      </p>
      <div className={s.featuresWrapper}>
        {FEATURES_DATA.map((item) => (
          <CardCase key={item.heading} {...item} isProduct />
        ))}
      </div>
    </Container>
  )
}

SectionFeatures.defaultProps = {
  className: '',
}

SectionFeatures.propTypes = {
  className: PropTypes.string,
}

export default SectionFeatures
