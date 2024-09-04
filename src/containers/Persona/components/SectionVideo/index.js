import React from 'react'
import { Container } from 'react-bootstrap'

import ButtonGroup from '~components/ui/ButtonGroup'
import Caption from '~components/ui/Caption'
import Player from '~components/Player'

import * as s from './SectionVideo.module.scss'

const SectionVideo = ({ heading, text, video, buttons, caption, utm }) => {
  return (
    <Container as="section" className={s.section}>
      <div className={s.heading}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      {video && <Player video={video} />}
      {buttons && (
        <ButtonGroup
          className={s.buttons}
          data={buttons}
          utm={utm}
          ctaId="video"
        />
      )}
      {caption && <Caption>{caption}</Caption>}
    </Container>
  )
}

export default SectionVideo
