import React from 'react'

import ButtonGroup from '~components/ui/ButtonGroup'
import ServicesList from '../ServicesList'

import * as s from './PricePlan.module.scss'

const PricePlan = (props) => {
  const {
    id,
    tagText,
    title,
    description,
    priceAnnual,
    periodAnnual,
    previewPriceAnnual,
    currentPriceAnnual,
    button,
    featuresList,
    items,
  } = props

  return (
    <div className={s.priceItem}>
      {!!tagText && <span className={s.priceItem__badge}>{tagText}</span>}
      <h3 className={s.priceItem__title}>{title}</h3>
      <p className={s.priceItem__description}>{description}</p>
      {!button?.length ? (
        <div className={s.priceItem__price}>
          {priceAnnual}
          {periodAnnual && <span>/{periodAnnual}</span>}
        </div>
      ) : (
        <ButtonGroup data={button} className={s.priceItem__contactUsBtn} />
      )}
      {!!previewPriceAnnual && (
        <div className={s.priceItem__discount}>
          <div className={s.priceItem__discount__prev}>
            {previewPriceAnnual}
          </div>
          <div className={s.priceItem__discount__cur}>{currentPriceAnnual}</div>
        </div>
      )}

      {items.map((featureCat) => (
        <ServicesList
          key={featureCat.name}
          {...featureCat}
          planId={id}
          availableFeatures={featuresList}
        />
      ))}
    </div>
  )
}

export default PricePlan
