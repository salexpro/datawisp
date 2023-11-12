import React from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'
import { StructuredText } from 'react-datocms'

import Icon from '~components/ui/Icon'

import * as s from './Feature.module.scss'

const Feature = (props) => {
  const { iconName, heading, variant, text } = props

  const isLong = variant === 'long'

  return (
    <div className={cn(s.feature, { [s[variant]]: variant })}>
      <Icon name={iconName} size={isLong ? 24 : 48} className={s.icon} />
      <h3 className={isLong ? 'h5' : 'h6'}>{heading}</h3>
      <div className={s.text}>
        <StructuredText data={text.value} />
      </div>
    </div>
  )
}

Feature.propTypes = {
  iconName: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
}

export default Feature
