import React from 'react'
import clsx from 'clsx'

import { getCellByType } from './utils'
import * as s from './TableBody.module.scss'

const TableBody = ({ body, selectedColNumber }) => {
  return (
    <tbody>
      {body.map(({ title, rows }, i) => (
        <>
          <tr key={title}>
            {rows[0].map((_, j) => (
              <td className={s.subTitle}>{j === 0 && title}</td>
            ))}
          </tr>
          {rows.map((row, j) => (
            <tr className={s.row}>
              {row.map((cell, k) => (
                <td
                  className={clsx(s.cell, {
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
        </>
      ))}
    </tbody>
  )
}

export default TableBody
