import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import classNames from 'classnames'

import Feature from './components/Feature'
import * as s from './SectionFeatures.module.scss'

const SectionFeatures = (props) => {
  const { heading, text, items, className, ...rest } = props

  return (
    <Container
      as="section"
      {...rest}
      className={classNames(s.sectionFeatures, className)}
    >
      <h2>{heading}</h2>
      <StructuredText data={text.value} />
      <div className={s.featuresWrapper}>
        {items.map((item) => (
          <Feature
            key={item.id}
            iconName={item.iconName}
            heading={item.heading}
            text={item.text}
          />
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
