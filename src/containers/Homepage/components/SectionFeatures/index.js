import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import cn from 'classnames'

import ImageFormat from '~components/ImageFormat'

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
      <ImageFormat
        url={image.url}
        alt="features image"
        file={image}
        format={image.format}
      />
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
