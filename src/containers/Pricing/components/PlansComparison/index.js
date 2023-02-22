import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import Switch from '~components/Switch'

import { processHeaderData } from './utils'
import TableDesktop from './components/TableDesktop'
import TableMobile from './components/TableMobile'
import * as s from './PlansComparison.module.scss'

const PlansComparison = ({ switchButton, pricingPlans, plansComparison }) => {
  const { annual, monthly, discount } = switchButton
  const headers = processHeaderData(switchButton, pricingPlans)

  const [selectedPlan, setSelectedPlan] = useState(annual)
  const header = headers[selectedPlan]

  return (
    <Container className={s.wrapper}>
      <Switch
        first={annual}
        second={monthly}
        discount={discount}
        onChange={setSelectedPlan}
        className={s.switchButton}
      />

      <TableDesktop header={header} plansComparison={plansComparison} />
      <TableMobile header={header} plansComparison={plansComparison} />
    </Container>
  )
}

export default PlansComparison
