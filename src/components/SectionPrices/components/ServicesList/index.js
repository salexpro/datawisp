import React from 'react'
import cn from 'clsx'

import OverlayTooltip from '~components/ui/OverlayTooltip'

import { getGridArea } from './utils'
import * as s from './ServicesList.module.scss'

const ServicesList = ({
  name,
  pricingPage,
  features,
  planId,
  availableFeatures,
}) => {
  const flattenAvailable = availableFeatures.map(({ id }) => id)

  const filteredFeatures = features.filter(({ id }) =>
    flattenAvailable.includes(id)
  )

  return (
    !pricingPage && (
      <div className={s.servicesList} style={{ gridArea: getGridArea(name) }}>
        <h4 className={s.servicesList__title}>{name}</h4>
        <ul className={s.list}>
          {filteredFeatures.map(
            ({
              id,
              name: fName,
              customValue,
              customReplace,
              tooltipText,
              tooltipRelation,
            }) => {
              const flattenTooltipRelation = tooltipRelation.map((t) => t.id)

              const customFiltered =
                !!customValue.length &&
                customValue.filter(({ plansAppliedTo }) =>
                  plansAppliedTo.map((p) => p.id).includes(planId)
                )

              const customVal =
                !!customFiltered.length &&
                customReplace &&
                (fName === name ? (
                  customFiltered[0].value
                ) : (
                  <span>
                    {fName} – <b>{customFiltered[0]?.value}</b>
                  </span>
                ))

              return flattenTooltipRelation.includes(planId) ? (
                <OverlayTooltip
                  key={id}
                  text={tooltipText}
                  placement="top-start"
                >
                  <li className={cn(s.list__item, s.note)}>{fName}</li>
                </OverlayTooltip>
              ) : (
                <li key={id} className={cn(s.list__item, s.check)}>
                  {customVal || fName}
                </li>
              )
            }
          )}
        </ul>
      </div>
    )
  )
}

export default ServicesList
