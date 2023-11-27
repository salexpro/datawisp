import React from 'react'
import { StructuredText } from 'react-datocms'
import { Container } from 'react-bootstrap'

import ButtonGroup from '~components/ui/ButtonGroup'

import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const { heading, buttons } = props

  return (
    <Container as="section" className={s.sectionHero}>
      <StructuredText data={heading.value} />
      <ButtonGroup data={buttons} className={s.button} />
    </Container>
  )
}

export default SectionHero
