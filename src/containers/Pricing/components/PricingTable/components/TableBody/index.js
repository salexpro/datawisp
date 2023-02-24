/* eslint-disable react/no-array-index-key */
import React from 'react'
import classNames from 'classnames'

import { getCellByType } from './utils'
import * as s from './TableBody.module.scss'

const TableBody = ({ body, selectedColNumber }) => {
  return (
    <tbody>
      {body.map(({ title, rows }, i) => (
        <React.Fragment key={title}>
          <tr className={s.subTitle}>
            {rows[0].map((_, j) => (
              <td key={`${title}-${j}`}>
                {j === 0 && <div className={s.subTitleContent}>{title}</div>}
              </td>
            ))}
          </tr>
          {rows.map((row, j) => (
            <tr key={`row-${j}`} className={s.row}>
              {row.map((cell, k) => (
                <td
                  key={`${cell.type}-${k}`}
                  className={classNames(s.cell, {
                    [s.cellTitle]: k === 0,
                    [s.selected]:
                      i === body.length - 1 &&
                      j === rows.length - 1 &&
                      k === selectedColNumber,
                  })}
                >
                  {getCellByType(cell)}
                </td>
              ))}
            </tr>
          ))}
        </React.Fragment>
      ))}
    </tbody>
  )
}

export default TableBody
