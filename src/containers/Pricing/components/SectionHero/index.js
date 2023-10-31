import React from 'react'
import { Container, Button } from 'react-bootstrap'

import Icon from '~components/ui/Icon'

import * as s from './SectionHero.module.scss'

const SectionHero = ({ heroSection }) => {
  const { heading, description, tags, buttonText, buttonLink } = heroSection
  return (
    <Container className={s.sectionHero}>
      <h1>{heading}</h1>
      <p className={s.description}>{description}</p>

      {tags.length > 0 && (
        <div className={s.tagsWrapper}>
          {tags.map(({ id, iconName, tagText }) => (
            <div key={id} className={s.tag}>
              <Icon name={iconName} size={20} />
              <div>{tagText}</div>
            </div>
          ))}
        </div>
      )}

      {buttonText && buttonLink && (
        <Button
          href={buttonLink}
          target="_blank"
          rel="noreferrer"
          className={s.button}
        >
          {buttonText}
        </Button>
      )}
    </Container>
  )
}

export default SectionHero
