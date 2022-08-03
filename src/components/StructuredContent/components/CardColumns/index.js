import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { StructuredText } from 'react-datocms'

import * as s from './CardColumns.module.scss'

const CardColumns = (props) => {
  const { className, columns, ...rest } = props

  return (
    <div {...rest} className={clsx('article-card', s.cardColumns, className)}>
      {columns.map(({ id, content }) => (
        <div key={id} className={s.column}>
          <StructuredText data={content} />
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
