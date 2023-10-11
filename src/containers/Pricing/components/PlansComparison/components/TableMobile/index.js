import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import cn from 'clsx'

import TableHeader from '../TableHeader'
import TableBody from '../TableBody'
import { processMobileTableData } from '../../utils'
import * as s from '../../PlansComparison.module.scss'

const TableMobile = ({ header, plansComparison }) => {
  const [activeTab, setActiveTab] = useState(() => {
    const index = header.findIndex((item) => item.isSelected)
    return index === -1 ? 0 : index
  })

  return (
    <Tabs className={s.tabs} activeKey={activeTab} onSelect={setActiveTab}>
      {header.map(({ id, title, isSelected }, i) => (
        <Tab key={id} eventKey={i} title={title}>
          <table className={cn(s.pricingTable, s.mobile)}>
            <colgroup>
              <col />
              <col className={cn({ [s.selected]: isSelected })} />
            </colgroup>
            <TableHeader header={[header[activeTab]]} isMobile />
            <TableBody
              tables={processMobileTableData(plansComparison, activeTab)}
              isSelected={isSelected}
            />
          </table>
        </Tab>
      ))}
    </Tabs>
  )
}

export default TableMobile
