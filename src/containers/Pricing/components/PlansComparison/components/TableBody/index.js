/* eslint-disable no-nested-ternary */
import React from 'react'
import cn from 'clsx'
import { FormCheck } from 'react-bootstrap'

import Icon from '~components/ui/Icon'

import * as s from './TableBody.module.scss'

const TableBody = ({ plans, data }) => {
  return (
    <tbody>
      {data.map(({ id: catId, name, features }) => (
        <React.Fragment key={catId}>
          <tr className={s.subTitle}>
            <td className={s.subTitleContent}>{name}</td>
            {plans.map(({ id: planId, isSelected: selected }) => (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <td key={planId} className={cn({ [s.selected]: selected })} />
            ))}
          </tr>
          {features.map(({ id: featureId, name: featureName, customValue }) => (
            <tr key={featureId} className={s.row}>
              <td className={cn(s.cell, s.cellTitle)}>{featureName}</td>
              {plans.map(
                ({ id: planId, featuresList, isSelected: selected }) => {
                  const featuresFlatten = featuresList.map(({ id }) => id)

                  const isFeatureBelong = featuresFlatten.includes(featureId)

                  const customValueApplied = customValue.find(
                    ({ plansAppliedTo }) => {
                      const plansAppliedToFlatten = plansAppliedTo.map(
                        ({ id }) => id
                      )
                      return plansAppliedToFlatten.includes(planId)
                    }
                  )

                  return (
                    <td
                      key={planId}
                      className={cn(s.cell, { [s.selected]: selected })}
                    >
                      {isFeatureBelong ? (
                        customValueApplied ? (
                          customValueApplied?.value
                        ) : (
                          <FormCheck type="radio" checked readOnly />
                        )
                      ) : (
                        <Icon name="icon-plan-inactive" size={20} />
                      )}
                    </td>
                  )
                }
              )}
            </tr>
          ))}
        </React.Fragment>
      ))}
    </tbody>
  )
}

export default TableBody
