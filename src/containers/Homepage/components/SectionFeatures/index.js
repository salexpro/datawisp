import React from 'react'
import { Container } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import cn from 'classnames'

import FeaturesList from './components/FeaturesList'
import * as s from './SectionFeatures.module.scss'

const SectionFeatures = (props) => {
  const { features, className, ...rest } = props
  const { image, ...list } = features

  return (
    <Container
      {...rest}
      as="section"
      className={cn(s.sectionFeatures, className)}
    >
      <FeaturesList {...list} />
      <GatsbyImage alt="features image" image={getImage(image)} />
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
