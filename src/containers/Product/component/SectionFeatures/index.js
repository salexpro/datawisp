import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import clsx from 'clsx'

import CardCase from '~components/CardCase'

import * as s from './SectionFeatures.module.scss'

const SectionFeatures = (props) => {
  const { heading, text, items, className, ...rest } = props

  return (
    <Container
      as="section"
      {...rest}
      className={clsx(s.sectionFeatures, className)}
    >
      <h2>{heading}</h2>
      <StructuredText data={text.value} />
      <div className={s.featuresWrapper}>
        {items.map((item) => (
          <CardCase
            key={item.id}
            postIcon={item.iconName}
            heading={item.heading}
            badgeText={item.text}
            isProduct
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
