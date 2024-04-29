import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { StructuredText } from 'react-datocms'

import ImageFormat from '~components/ui/ImageFormat'

import * as s from './CardStep.module.scss'

const CardStep = (props) => {
  const { className, heading, step, image, description, ...rest } = props

  return (
    <div {...rest} className={cn(s.cardStep, className)}>
      <h3 className={cn('h6', s.title)}>{heading}</h3>
      <div className={s.imageWrapper}>
        <ImageFormat alt={`Step ${step}`} file={image} />
      </div>
      {description && (
        <div className={s.description}>
          <StructuredText className={s.text} data={description.value} />
        </div>
      )}
    </div>
  )
}

CardStep.defaultProps = {
  className: undefined,
}

CardStep.propTypes = {
  className: PropTypes.string,
}

export default CardStep
