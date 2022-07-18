import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import * as s from './CardColumns.module.scss'

const CardColumns = (props) => {
  const { className, columns, ...rest } = props

  return (
    <div {...rest} className={cn(s.cardColumns, className)}>
      {columns.map(({ heading, content }) => (
        <div className={s.column}>
          <h2 className="h-card">{heading}</h2>
          {content}
        </div>
      ))}
    </div>
  )
}

CardColumns.defaultProps = {
  className: undefined,
}

CardColumns.propTypes = {
  className: PropTypes.string,
}

export default CardColumns
