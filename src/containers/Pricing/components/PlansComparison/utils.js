import React from 'react'
import { Form } from 'react-bootstrap'

import Icon from '~components/ui/Icon'

import { CELL_TYPE } from './constants'
import { empty } from './PlansComparison.module.scss'

export const processHeaderData = (keys, pricingPlans) => {
  return pricingPlans.reduce(
    (prev, cur) => {
      const {
        priceAnnual,
        periodAnnual,
        priceMonthly,
        periodMonthly,
        currentPriceAnnual,
        previewPriceAnnual,
        currentPriceMonthly,
        previewPriceMonthly,
        ...rest
      } = cur

      return {
        [keys.annual]: [
          ...prev[keys.annual],
          {
            price: priceAnnual,
            period: periodAnnual,
            discount: {
              currentPrice: currentPriceAnnual,
              previousPrice: previewPriceAnnual,
            },
            ...rest,
          },
        ],
        [keys.monthly]: [
          ...prev[keys.monthly],
          {
            price: priceMonthly,
            period: periodMonthly,
            discount: {
              current: currentPriceMonthly,
              preview: previewPriceMonthly,
            },
            ...rest,
          },
        ],
      }
    },
    { [keys.annual]: [], [keys.monthly]: [] }
  )
}

export const processMobileTableData = (tableData, key) =>
  tableData.map(({ rows, ...rest }) => ({
    ...rest,
    rows: rows.map(({ cells, ...row }) => ({
      cells: [cells[key]],
      ...row,
    })),
  }))

export const getCellByType = (cellType, text) => {
  switch (cellType) {
    case CELL_TYPE.CHECK_BOX:
      return <Form.Check type="radio" checked readOnly />
    case CELL_TYPE.EMPTY:
      return <Icon name="icon-plan-inactive" size={20} className={empty} />
    case CELL_TYPE.TEXT:
      return text
    default:
      return ''
  }
}
