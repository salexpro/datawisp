import React from 'react'
import { VideoPlayer } from 'react-datocms'
import cn from 'classnames'

import ImageFormat from '../ImageFormat'

import * as s from './MediaItem.module.scss'

const PLAYER_OPTIONS = {
  autoPlay: 'muted',
  loop: true,
  nohotkeys: true,
  preload: 'auto',
  poster: '',
  minResolution: '720p',
}

const MediaItem = ({ data, className, ...rest }) => {
  return data?.video ? (
    <div className={cn(s.video, className)} {...rest}>
      <VideoPlayer data={data.video} {...PLAYER_OPTIONS} />
    </div>
  ) : (
    <ImageFormat
      alt="hero"
      file={data}
      className={cn(s.image, className)}
      objectFit="contain"
      {...rest}
    />
  )
}

export default MediaItem
