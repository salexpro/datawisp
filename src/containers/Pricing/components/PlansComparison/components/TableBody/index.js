import React from 'react'
import cn from 'classnames'

import { getCellByType } from '../../utils'
import * as s from './TableBody.module.scss'

const TableBody = ({ tables, isSelected, selectedColNumbers }) => {
  return (
    <tbody>
      {tables.map(({ id: tableId, title: tableTitle, rows }, i) => (
        <React.Fragment key={tableId}>
          <tr className={s.subTitle}>
            {rows[0].cells.map(({ id: cellId }, j) => (
              <td key={`${tableId}-${cellId}`}>
                {j === 0 && (
                  <div className={s.subTitleContent}>{tableTitle}</div>
                )}
              </td>
            ))}
            <td> </td>
          </tr>
          {rows.map(({ id: rowId, title: rowTitle, cells }, j) => (
            <tr key={rowId} className={s.row}>
              <td className={cn(s.cell, s.cellTitle)}>{rowTitle}</td>
              {cells.map(({ id: cellId, cellType, text }, k) => (
                <td
                  key={cellId}
                  className={cn(s.cell, {
                    [s.selected]:
                      // Last table, last row, selected column
                      i === tables.length - 1 &&
                      j === rows.length - 1 &&
                      (selectedColNumbers?.includes(k) || isSelected),
                  })}
                >
                  {getCellByType(cellType, text)}
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
