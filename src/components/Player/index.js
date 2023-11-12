import React, { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'clsx'

import getImgWithBlurHash from '~utils/getImgWithBlurHash'
import playImg from './img/play.svg'

import * as s from './Player.module.scss'

const Player = ({ video, className }) => {
  const [videoActive, setVideoActive] = useState(null)

  return (
    <div className={cn(s.player, className)}>
      {videoActive ? (
        <ReactPlayer
          width="100%"
          height="100%"
          // height={1030 / 1.7777777778}
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
            aria-label="Play"
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
  )
}

export default Player
