import React from 'react'
import { Button } from 'react-bootstrap'

import ServicesList from './components/ServicesList'
import * as s from './PricePlan.module.scss'

const PricePlan = (props) => {
  const { badgeText, title, description, price, discount, sections } = props

  return (
    <div className={s.priceItem}>
      {!!badgeText && <span className={s.priceItem__badge}>{badgeText}</span>}
      <h3 className={s.priceItem__title}>{title}</h3>
      <p className={s.priceItem__description}>{description}</p>
      {price ? (
        <div className={s.priceItem__price}>{price}</div>
      ) : (
        <Button
          variant="outline-secondary"
          className={s.priceItem__contactUsBtn}
          href="mailto:hello@datawisp.io"
        >
          Contact us
        </Button>
      )}
      {!!discount && (
        <div className={s.priceItem__discount}>
          <div className={s.priceItem__discount__prev}>
            {discount.prevPrice}
          </div>
          <div className={s.priceItem__discount__cur}>{discount.curPrice}</div>
        </div>
      )}

      {sections.map((section) => (
        <ServicesList key={title} {...section} />
      ))}
    </div>
  )
}

export default PricePlan
