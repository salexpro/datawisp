import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { StructuredText } from 'react-datocms'

import * as s from './ArticleTable.module.scss'

const ArticleTable = (props) => {
  const { caption, rows, className, ...rest } = props

  return (
    <div {...rest} className={classNames(s.tableScroll, className)}>
      <div className={s.caption}>
        <StructuredText data={caption.value} />
      </div>
      <div className={s.tableWrap}>
        <table>
          <tbody>
            {rows.map(({ cells }) => (
              <tr>
                {cells.map(({ cell }) => (
                  <td>
                    <StructuredText data={cell.value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

ArticleTable.defaultProps = {
  className: '',
}

ArticleTable.propTypes = {
  className: PropTypes.string,
}

export default ArticleTable
