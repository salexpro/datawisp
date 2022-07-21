import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import ImageFormat from '~components/ImageFormat'

import * as s from './CardStep.module.scss'

const CardStep = (props) => {
  const { className, stepNumber, text, file, ...rest } = props

  return (
    <div {...rest} className={cn(s.cardStep, className)}>
      <span className={s.text}>{text}</span>
      <ImageFormat
        alt={`step ${stepNumber} image`}
        file={file}
        className={s.img}
      />
    </div>
  )
}

CardStep.defaultProps = {
  className: undefined,
}

CardStep.propTypes = {
  className: PropTypes.string,
  stepNumber: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default CardStep
