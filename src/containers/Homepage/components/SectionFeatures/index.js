import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import cn from 'classnames'

import FeaturesList from './components/FeaturesList'
import featuresImg from './assets/illustration.svg'
import * as s from './SectionFeatures.module.scss'

const SectionFeatures = (props) => {
  const { className, ...rest } = props

  return (
    <Container
      {...rest}
      as="section"
      className={cn(s.sectionFeatures, className)}
    >
      <FeaturesList />
      <img src={featuresImg} alt="features" width="100%" />
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
