import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import ImageFormat from '~components/ImageFormat'

import * as s from './CardStep.module.scss'

const CardStep = (props) => {
  const { className, heading, image, ...rest } = props

  return (
    <div {...rest} className={clsx(s.cardStep, className)}>
      <span className={s.text}>{heading}</span>
      <div className={s.imageWrapper}>
        <ImageFormat alt="step 1" file={image} />
      </div>
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
