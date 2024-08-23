import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import cn from 'classnames'

import TableHeader from '../TableHeader'
import TableBody from '../TableBody'

import * as s from '../../PlansComparison.module.scss'

const TableMobile = ({ plans, data }) => {
  const defaultPlan = plans.findIndex(({ isSelected }) => isSelected)

  const defaultIndex = defaultPlan !== -1 ? defaultPlan : 0

  const [activeTab, setActiveTab] = useState(defaultIndex)

  return (
    <Tabs className={s.tabs} activeKey={activeTab} onSelect={setActiveTab}>
      {plans.map(({ id, title }, i) => (
        <Tab key={id} eventKey={i} title={title}>
          <table className={cn(s.pricingTable, s.mobile)}>
            <TableHeader data={[plans[activeTab]]} isMobile />
            <TableBody plans={[plans[activeTab]]} data={data} />
          </table>
        </Tab>
      ))}
    </Tabs>
  )
}

export default TableMobile
