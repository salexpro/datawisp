import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { chunk } from 'lodash'

import * as s from './RoadmapItem.module.scss'

const RoadmapItem = (props) => {
  const { variant, heading, list, className, ...rest } = props

  const parts = chunk(list, Math.ceil(list.length / 2))

  return (
    <div
      {...rest}
      className={cn(s.roadmapItem, { [s[variant]]: variant }, className)}
      data-phase="Phase 1"
    >
      <h3 className={cn(s.heading, 'h5')}>{heading}</h3>
      {parts.map((items) => (
        <ul key={items.toString()} className={s.listWrapper}>
          {items.map((text) => (
            <li key={text} className={cn(s.listItem)}>
              {text}
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

RoadmapItem.defaultProps = {
  variant: 'gray',
  className: '',
}

RoadmapItem.propTypes = {
  variant: PropTypes.oneOf(['gray', 'purple', 'pink']),
  heading: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
}

export default RoadmapItem
