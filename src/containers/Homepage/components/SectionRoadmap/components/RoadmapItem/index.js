import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { StructuredText } from 'react-datocms'

import * as s from './RoadmapItem.module.scss'

const RoadmapItem = (props) => {
  const { variant, heading, listLeft, listRight, className, ...rest } = props

  return (
    <div
      {...rest}
      className={cn(s.roadmapItem, { [s[variant]]: variant }, className)}
    >
      <h3 className={cn(s.heading, 'h5')}>{heading}</h3>
      <StructuredText data={listLeft.value} />
      <StructuredText data={listRight.value} />
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
  listLeft: PropTypes.object.isRequired,
  listRight: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default RoadmapItem
