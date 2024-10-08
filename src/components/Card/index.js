import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import cn from 'classnames'

import Icon from '~components/ui/Icon'

import * as s from './Card.module.scss'

const Card = (props) => {
  const { icon, title, description, videoUrl, image, variant } = props

  return (
    <div className={cn(s.card, { [s[variant]]: variant })}>
      <GatsbyImage alt={title} image={getImage(image)} className={s.image} />
      <div className={s.title}>
        {icon && <Icon name={icon} className={s.title__icon} />}
        <h3 className={s.title__header}>{title}</h3>
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

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  videoUrl: PropTypes.string.isRequired,
}

export default Card
