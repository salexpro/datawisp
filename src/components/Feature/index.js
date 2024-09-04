import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { StructuredText } from 'react-datocms'

import Icon from '~components/ui/Icon'

import * as s from './Feature.module.scss'

const Feature = (props) => {
  const { iconName, heading, variant, text } = props

  const isLong = variant === 'long'
  const isRow = variant === 'row'

  return (
    <div className={cn(s.feature, { [s[variant]]: variant })}>
      <Icon name={iconName} size={isLong ? 24 : 48} className={s.icon} />
      <h3 className={isLong || isRow ? 'h5' : 'h6'}>{heading}</h3>
      {text && (
        <div className={s.text}>
          <StructuredText data={text.value} />
        </div>
      )}
    </div>
  )
}

Feature.propTypes = {
  iconName: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.object,
}

Feature.defaultProps = {
  text: null,
}

export default Feature
