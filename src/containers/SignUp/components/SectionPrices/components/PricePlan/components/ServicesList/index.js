import React from 'react'
import cn from 'classnames'

import { getGridArea } from './utils'
import * as s from './ServicesList.module.scss'

const ServicesList = ({ title, items }) => {
  return (
    <div className={s.servicesList} style={{ gridArea: getGridArea(title) }}>
      <h4 className={s.servicesList__title}>{title}</h4>
      <ul className={s.list}>
        {items.map((item) => (
          <li
            className={cn(s.list__item, {
              [s.check]: !item.isNotReady,
              [s.note]: item.isNotReady,
            })}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServicesList
