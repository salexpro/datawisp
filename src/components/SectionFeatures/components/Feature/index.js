import React from 'react'
import PropTypes from 'prop-types'

import Icon from '~components/Icon'

import * as s from './Feature.module.scss'

const Feature = (props) => {
  const { iconName, heading, text } = props

  return (
    <div className={s.feature}>
      <Icon name={iconName} size={48} className={s.icon} />
      <h3 className="h6">{heading}</h3>
      <p className={s.text}>{text}</p>
    </div>
  )
}

Feature.propTypes = {
  iconName: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Feature
