import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import * as s from './Card.module.scss'

const Card = (props) => {
  const { heading, className, children, ...rest } = props

  return (
    <div {...rest} className={cn(s.card, className)}>
      {heading && (
        <h3 className="h-card">What is the value proposition of a project?</h3>
      )}
      {children}
    </div>
  )
}

Card.defaultProps = {
  className: undefined,
  heading: undefined,
}

Card.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
}

export default Card
