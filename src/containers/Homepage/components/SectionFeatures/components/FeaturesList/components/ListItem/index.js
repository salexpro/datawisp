import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Icon from '~components/Icon'

import * as s from './ListItem.module.scss'

const ListItem = (props) => {
  const { heading, text, className, ...rest } = props

  return (
    <div {...rest} className={cn(s.listItem, className)}>
      <Icon name="icon-box" size={20} className={s.icon} />
      <h3 className="h6">{heading}</h3>
      <p>{text}</p>
    </div>
  )
}

ListItem.defaultProps = {
  className: '',
}

ListItem.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default ListItem
