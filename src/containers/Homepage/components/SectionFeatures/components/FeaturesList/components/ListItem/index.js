import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { StructuredText } from 'react-datocms'

import Icon from '~components/Icon'

import * as s from './ListItem.module.scss'

const ListItem = (props) => {
  const { heading, text, iconName, className, ...rest } = props

  return (
    <div {...rest} className={clsx(s.listItem, className)}>
      <Icon name={iconName} size={20} className={s.icon} />
      <h3 className="h6">{heading}</h3>
      <StructuredText data={text.value} />
    </div>
  )
}

ListItem.defaultProps = {
  className: '',
}

ListItem.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default ListItem
