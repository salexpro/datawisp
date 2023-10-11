import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import cn from 'clsx'

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
      <h2>{heading}</h2>
      <p className={s.text}>{text}</p>
      <div className={s.featuresWrapper}>
        {items.map((item) => (
          <Feature key={item.id} {...item} variant={variant} />
        ))}
      </div>
      {buttons && (
        <div className={cn('btn-group', s.buttons)}>
          {buttons.map(({ id, label, link, variant: v }) => {
            const isExternal = link?.internal?.type === 'DatoCmsLinkExternal'

            const linkProps = isExternal
              ? {
                  as: 'a',
                  href: `${link.url}${utm ? `?${utm}` : ''}`,
                  target: '_blank',
                }
              : {
                  as: Link,
                  to: link?.url || link?.anchor,
                }
            return (
              <Button {...linkProps} variant={v} className={s.button} key={id}>
                {label}
              </Button>
            )
          })}
        </div>
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
