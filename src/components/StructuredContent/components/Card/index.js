import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { StructuredText } from 'react-datocms'

import * as s from './Card.module.scss'

const Card = (props) => {
  const { className, content, ...rest } = props

  return (
    <div {...rest} className={cn('article-card', s.card, className)}>
      <StructuredText data={content} />
    </div>
  )
}

Card.defaultProps = {
  className: undefined,
}

Card.propTypes = {
  className: PropTypes.string,
}

export default Card
