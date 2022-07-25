import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import * as s from './IntegrationItem.module.scss'

const IntegrationItem = (props) => {
  const { heading, text, imgSrc, className, ...rest } = props

  return (
    <div {...rest} className={cn(s.integrationItem, className)}>
      <img src={imgSrc} alt={heading} className={s.img} />
      <h3 className={s.heading}>{heading}</h3>
      <p className={s.text}>{text}</p>
    </div>
  )
}

IntegrationItem.defaultProps = {
  className: '',
}

IntegrationItem.propTypes = {
  className: PropTypes.string,
}

export default IntegrationItem
