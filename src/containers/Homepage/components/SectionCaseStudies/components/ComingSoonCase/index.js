import React from 'react'
import PropTypes from 'prop-types'
import { Badge } from 'react-bootstrap'
import clsx from 'clsx'

import * as s from './ComingSoonCase.module.scss'

const ComingSoonCase = (props) => {
  const { className, ...rest } = props

  return (
    <div {...rest} className={clsx(s.comingSoonCase, className)}>
      <Badge bg="disabled">Coming Soon</Badge>
    </div>
  )
}

ComingSoonCase.defaultProps = {
  className: '',
}

ComingSoonCase.propTypes = {
  className: PropTypes.string,
}

export default ComingSoonCase
