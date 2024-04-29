import React from 'react'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import ButtonGroup from '~components/ui/ButtonGroup'

import * as s from './SectionDeRisk.module.scss'

const SectionDeRisk = ({ heading, content, buttons, utm }) => {
  return (
    <section className={s.section}>
      <Container>
        <h2>{heading}</h2>
        <StructuredText data={content.value} />
        <ButtonGroup data={buttons} utm={utm} className={s.buttons} />
      </Container>
    </section>
  )
}

export default SectionDeRisk
