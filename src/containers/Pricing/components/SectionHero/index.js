import React from 'react'
import { Container } from 'react-bootstrap'

import Icon from '~components/ui/Icon'
import ButtonGroup from '~components/ui/ButtonGroup'

import * as s from './SectionHero.module.scss'

const SectionHero = ({ heroSection, utm }) => {
  const { heading, description, tags, heroButtons } = heroSection
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

      <ButtonGroup data={heroButtons} className={s.button} utm={utm} />
    </Container>
  )
}

export default SectionHero
