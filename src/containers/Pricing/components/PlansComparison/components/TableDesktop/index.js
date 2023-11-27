import React from 'react'
import cn from 'clsx'

import TableHeader from '../TableHeader'
import TableBody from '../TableBody'
import * as s from '../../PlansComparison.module.scss'

const TableDesktop = ({ plans, data }) => {
  return (
    <table className={cn(s.pricingTable, s.desktop)}>
      <TableHeader data={plans} />
      <TableBody plans={plans} data={data} />
    </table>
  )
}

export default TableDesktop
