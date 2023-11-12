import React from 'react'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import ButtonGroup from '~components/ui/ButtonGroup'

import * as s from './SectionHero.module.scss'

const SectionHero = ({ heading, descr, buttons, bg, utm }) => {
  return (
    <section className={s.sectionhero}>
      <div className={s.content}>
        <Container>
          <div className={s.heading}>
            <h1>{heading}</h1>
            <StructuredText data={descr.value} />
          </div>
          <ButtonGroup
            className={s.buttons}
            data={buttons}
            utm={utm}
            ctaId="hero"
          />
        </Container>
      </div>
      <GatsbyImage alt={heading} image={getImage(bg)} className={s.bgImg} />
    </section>
  )
}

export default SectionHero
