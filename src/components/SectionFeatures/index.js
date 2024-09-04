import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import cn from 'classnames'

import ButtonGroup from '~components/ui/ButtonGroup'
import Caption from '~components/ui/Caption'
import Feature from '../Feature'

import * as s from './SectionFeatures.module.scss'

const SectionFeatures = (props) => {
  const { heading, text, items, buttons, caption, variant, utm } = props

  return (
    <Container
      as="section"
      id="features"
      className={cn(s.sectionFeatures, { [s[variant]]: variant })}
    >
      <div className={s.heading}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className={s.featuresWrapper}>
        {items.map((item) => (
          <Feature key={item.id} {...item} variant={variant} />
        ))}
      </div>
      {buttons && (
        <ButtonGroup
          className={s.buttons}
          data={buttons}
          utm={utm}
          ctaId="features"
        />
      )}
      {caption && <Caption>{caption}</Caption>}
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
