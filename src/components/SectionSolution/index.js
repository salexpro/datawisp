import React from 'react'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import cn from 'classnames'

import MediaItem from '../ui/MediaItem'
import ButtonGroup from '../ui/ButtonGroup'
import PersonasList from '../PersonasList'

import * as s from './SectionSolution.module.scss'

const renderBlock = ({ record }) => {
  // eslint-disable-next-line no-underscore-dangle
  switch (record.__typename) {
    case 'DatoCmsPersonasList':
      return (
        <PersonasList
          data={record.list}
          className={s.personas} /*  utm={utm}  */
        />
      )
    default:
      return null
  }
}

const SectionSolution = ({
  heading,
  lead,
  image,
  content,
  media,
  buttons,
  utm,
}) => {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <Container>
          <StructuredText data={heading.value} />
          <p className={cn('h5', s.lead)}>{lead}</p>
          <MediaItem data={image} className={s.image} />
          {buttons && <ButtonGroup data={buttons} utm={utm} ctaId="hero" />}
        </Container>
      </div>
      <Container className={s.content}>
        <StructuredText data={content} renderBlock={renderBlock} />
        <MediaItem data={media} className={s.media} />
        {buttons && <ButtonGroup data={buttons} utm={utm} ctaId="hero" />}
      </Container>
    </section>
  )
}

export default SectionSolution
