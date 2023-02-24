import React, { useState } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import classNames from 'classnames'

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

  const [activeTab, setActiveTab] = useState(header[0].title)

  const selectedColNumber = header.findIndex(({ isSelected }) => isSelected)

  return (
    <Container className={s.wrapper}>
      <Switch
        first={annual}
        second={monthly}
        discount="20% off"
        onChange={setSelectedPlan}
        className={s.switchButton}
      />

      <Tabs className={s.tabs} activeKey={activeTab} onSelect={setActiveTab}>
        {header.map(({ title, isSelected }) => (
          <Tab key={title} eventKey={title} title={title}>
            <table className={classNames(s.pricingTable, s.mobile)}>
              <colgroup>
                <col />
                <col className={classNames({ [s.selected]: isSelected })} />
              </colgroup>
              <TableHeader
                header={[header.find(({ title: item }) => item === activeTab)]}
                isMobile
              />
              <TableBody
                body={body.map(({ rows, ...rest }) => ({
                  ...rest,
                  rows: rows.map((row) => [row[0], row[1]]),
                }))}
                selectedColNumber={isSelected ? 1 : null}
              />
            </table>
          </Tab>
        ))}
      </Tabs>

      <table className={classNames(s.pricingTable, s.desktop)}>
        <colgroup>
          <col />
          {header.map(({ title, isSelected }) => (
            <col
              key={`col-${title}`}
              className={classNames({ [s.selected]: isSelected })}
            />
          ))}
        </colgroup>
        <TableHeader header={header} />
        <TableBody body={body} selectedColNumber={selectedColNumber + 1} />
      </table>
    </Container>
  )
}

export default PricingTable
