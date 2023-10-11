import React from 'react'
import cn from 'clsx'

import TableHeader from '../TableHeader'
import TableBody from '../TableBody'
import * as s from '../../PlansComparison.module.scss'

const TableDesktop = ({ header, plansComparison }) => {
  const selectedColNumbers = header.reduce((acc, { isSelected }, index) => {
    if (isSelected) acc.push(index)
    return acc
  }, [])

  return (
    <table className={cn(s.pricingTable, s.desktop)}>
      <colgroup>
        <col />
        {header.map(({ id, isSelected }) => (
          <col
            key={`colgroup-${id}`}
            className={cn({ [s.selected]: isSelected })}
          />
        ))}
      </colgroup>
      <TableHeader header={header} />
      <TableBody
        tables={plansComparison}
        selectedColNumbers={selectedColNumbers}
      />
    </table>
  )
}

export default TableDesktop
