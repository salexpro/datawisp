import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

import Icon from '~components/Icon'

import * as s from './CardFunction.module.scss'

const CardFunction = (props) => {
  const { icon, title, description, videoUrl, image } = props

  return (
    <div className={s.cardFunction}>
      <GatsbyImage alt={title} image={getImage(image)} className={s.image} />
      <div className={s.title}>
        <Icon name={icon} />
        <h3>{title}</h3>
      </div>
      <p className={s.description}>{description}</p>
      {!!videoUrl && (
        <Button
          variant="outline-secondary"
          href={videoUrl}
          target="_blank"
          className={s.button}
        >
          <Icon name="icon-play" size={20} />
          Watch video
        </Button>
      )}
    </div>
  )
}

CardFunction.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  videoUrl: PropTypes.string.isRequired,
}

export default CardFunction
