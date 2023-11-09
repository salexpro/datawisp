import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import getImgWithBlurHash from '~utils/getImgWithBlurHash'
import cn from 'clsx'
import { Container } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'
import ReactPlayer from 'react-player/lazy'

import ButtonGroup from '~components/ui/ButtonGroup'

import playImg from './img/play.svg'

// import { useCookies } from 'react-cookie'

// import { GOOGLE_TAG_KEY } from '~constants'
// import { gtagReportConversion } from '~utils/analytics'

import * as s from './SectionHero.module.scss'

const SectionHero = (props) => {
  const { heading, text, video, buttons, className, utm, ...rest } = props

  // const [cookies] = useCookies([GOOGLE_TAG_KEY])

  const [videoActive, setVideoActive] = useState(null)

  return (
    <Container as="section" className={cn(s.sectionHero, className)} {...rest}>
      <h1>{heading}</h1>
      <div className={s.lead}>
        <StructuredText data={text.value} />
      </div>
      <ButtonGroup
        className={s.buttons}
        data={buttons}
        utm={utm}
        ctaId="hero"
      />

      {video && (
        <div className={s.video}>
          {videoActive ? (
            <ReactPlayer
              width="100%"
              height="100%"
              // height={1030 / 1.7777777778}
              className={s.player}
              config={{
                youtube: {
                  playerVars: {
                    controls: 1,
                    color: 'white',
                    autoplay: 1,
                  },
                },
              }}
              url={video.url}
            />
          ) : (
            <>
              <button
                type="button"
                label="Play"
                className={s.playButton}
                onClick={() => setVideoActive(true)}
              >
                <img src={playImg} alt="Play button" />
              </button>
              <GatsbyImage
                image={getImgWithBlurHash(video.image)}
                alt={video.title}
                className={s.cover}
              />
            </>
          )}
        </div>
      )}
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
