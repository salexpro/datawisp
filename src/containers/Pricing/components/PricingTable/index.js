import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import clsx from 'clsx'

import Switch from '~components/Switch'

import { PRICING_TABLE, BILLING_PLANS } from './mocks'
import TableHeader from './components/TableHeader'
import TableBody from './components/TableBody'
import * as s from './PricingTable.module.scss'

const PricingTable = () => {
  const { headerMonthly, headerAnnual, body } = PRICING_TABLE
  const { annual, monthly } = BILLING_PLANS
  const headers = { [annual]: headerAnnual, [monthly]: headerMonthly }

  const [selectedPlan, setSelectedPlan] = useState(annual)
  const header = headers[selectedPlan]

  const selectedColNumber = header.findIndex(({ isSelected }) => isSelected)

  return (
    <Container className={s.wrapper}>
      <Switch
        first={annual}
        second={monthly}
        discount="20% off"
        onChange={setSelectedPlan}
      />
      <table className={s.pricingTable}>
        <colgroup>
          <col />
          {header.map(({ isSelected }) => (
            <col className={clsx({ [s.selected]: isSelected })} />
          ))}
        </colgroup>
        <TableHeader header={header} />
        <TableBody body={body} selectedColNumber={selectedColNumber + 1} />
      </table>
    </Container>
  )
}

export default PricingTable
