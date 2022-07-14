import React from 'react'
import { Container } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import cn from 'classnames'

import FeaturesList from './components/FeaturesList'
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
      <StaticImage
        src="./assets/illustration.webp"
        alt="features"
        quality={90}
        height={662}
        formats={['AUTO', 'PNG', 'AVIF']}
        layout="fullWidth"
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
