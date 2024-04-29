import React from 'react'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import Feature from '../Feature'

import * as s from './SectionAgitation.module.scss'

const SectionAgitation = ({
  title,
  subtitle,
  featuresTitle,
  features,
  content,
}) => {
  return (
    <Container as="section">
      <div className={s.inner}>
        <div className={s.content}>
          <StructuredText className={s.title} data={title.value} />
          <h5>{subtitle}</h5>
          <div className={s.features}>
            <h4 className={s.featuresTitle}>{featuresTitle}</h4>

            <div className={s.featuresList}>
              {features.map((item) => (
                <Feature key={item.id} {...item} />
              ))}
            </div>
          </div>
          <StructuredText data={content.value} />
        </div>
      </div>
    </Container>
  )
}

export default SectionAgitation
