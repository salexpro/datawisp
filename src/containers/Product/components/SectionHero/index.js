import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import Player from '~components/Player'
import ButtonGroup from '~components/ui/ButtonGroup'

// import { useCookies } from 'react-cookie'

// import { GOOGLE_TAG_KEY } from '~constants'
// import { gtagReportConversion } from '~utils/analytics'

import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const { heading, text, video, buttons, className, utm, ...rest } = props

  // const [cookies] = useCookies([GOOGLE_TAG_KEY])

  return (
    <Container as="section" className={cn(s.sectionHero, className)} {...rest}>
      <h1>{heading}</h1>
      <div className={s.lead}>
        <StructuredText data={text.value} />
      </div>
      <ButtonGroup data={buttons} utm={utm} ctaId="hero" />

      {video && <Player video={video} className={s.player} />}
    </Container>
  )
}

SectionHero.defaultProps = {
  className: '',
}

SectionHero.propTypes = {
  className: PropTypes.string,
}

export default SectionHero
