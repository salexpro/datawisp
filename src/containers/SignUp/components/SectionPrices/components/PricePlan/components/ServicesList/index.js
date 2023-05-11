import React from 'react'
import cn from 'classnames'

import OverlayTooltip from '~components/OverlayTooltip'

import { getGridArea } from './utils'
import * as s from './ServicesList.module.scss'

const ServicesList = ({ title, items }) => {
  return (
    <div className={s.servicesList} style={{ gridArea: getGridArea(title) }}>
      <h4 className={s.servicesList__title}>{title}</h4>
      <ul className={s.list}>
        {items.map(({ title: itemText, isNotReady }) => {
          return isNotReady ? (
            <OverlayTooltip text="To get this feature, you need to contact us">
              <li className={cn(s.list__item, s.note)}>{itemText}</li>
            </OverlayTooltip>
          ) : (
            <li className={cn(s.list__item, s.check)}>{itemText}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ServicesList
