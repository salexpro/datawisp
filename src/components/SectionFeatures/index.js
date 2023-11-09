import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import cn from 'clsx'

import ButtonGroup from '~components/ui/ButtonGroup'
import Feature from './components/Feature'

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
        <p className={s.text}>{text}</p>
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
      {caption && <span className={s.caption}>{caption}</span>}
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
