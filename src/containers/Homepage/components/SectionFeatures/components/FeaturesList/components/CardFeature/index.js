import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { StructuredText } from 'react-datocms'

import Icon from '~components/Icon'
import ImageFormat from '~components/ImageFormat'

import * as s from './CardFeature.module.scss'

const CardFeature = (props) => {
  const { heading, text, iconName, className, image, ...rest } = props

  return (
    <div {...rest} className={clsx(s.cardFeature, className)}>
      <ImageFormat file={image} className={s.img} />
      <div className={s.gridHeading}>
        <Icon name={iconName} size={24} className={s.icon} />
        <h3 className="h6">{heading}</h3>
      </div>
      <StructuredText data={text.value} />
    </div>
  )
}

CardFeature.defaultProps = {
  className: '',
}

CardFeature.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default CardFeature
