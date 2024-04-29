import React from 'react'
import PropTypes from 'prop-types'
import { Badge } from 'react-bootstrap'
import cn from 'classnames'

import * as s from './ComingSoonCase.module.scss'

const ComingSoonCase = (props) => {
  const { isRelated, className, ...rest } = props

  return (
    <div
      {...rest}
      className={cn(s.comingSoonCase, { [s.related]: isRelated }, className)}
    >
      <Badge bg={isRelated ? 'disabled2' : 'disabled'}>Coming Soon</Badge>
    </div>
  )
}

ComingSoonCase.defaultProps = {
  isRelated: false,
  className: '',
}

ComingSoonCase.propTypes = {
  isRelated: PropTypes.bool,
  className: PropTypes.string,
}

export default ComingSoonCase
