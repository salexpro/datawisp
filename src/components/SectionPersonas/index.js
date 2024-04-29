import React from 'react'
import cn from 'classnames'
import { Container } from 'react-bootstrap'

import PersonasList from '../PersonasList'

import * as s from './SectionPersonas.module.scss'

const SectionPersonas = ({ heading, text, personas, variant, utm }) => {
  return (
    <Container as="section" className={cn(s.section, s[variant])}>
      {heading && (
        <div className={s.heading}>
          <h2>{heading}</h2>
          <p className={s.text}>{text}</p>
        </div>
      )}
      <PersonasList data={personas} utm={utm} />
    </Container>
  )
}

export default SectionPersonas
