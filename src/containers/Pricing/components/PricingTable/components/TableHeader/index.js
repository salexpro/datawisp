import React from 'react'
import clsx from 'clsx'
import { Button } from 'react-bootstrap'

import * as s from './TableHeader.module.scss'

const TableHeader = ({ header }) => {
  return (
    <thead>
      <tr>
        <th> </th>
        {header.map(
          ({
            isSelected,
            isComingSoon,
            tag,
            title,
            subTitle,
            price,
            discount,
            button,
          }) => (
            <th
              key={title}
              className={clsx(s.cell, { [s.selected]: isSelected })}
            >
              <div className={s.headerWrapper}>
                {tag && (
                  <div
                    className={clsx(s.tag, {
                      [s.isComingSoon]: isComingSoon,
                    })}
                  >
                    {tag}
                  </div>
                )}

                <div className={s.title}>{title}</div>
                <p className={s.subTitle}>{subTitle}</p>

                {price && (
                  <div className={s.price}>
                    {price.value}
                    {price.period && <span>/{price.period}</span>}
                  </div>
                )}

                {button && (
                  <Button variant="outline-secondary" className={s.button}>
                    {button}
                  </Button>
                )}

                {discount && (
                  <div className={s.previousPrice}>
                    {discount.previousPrice}
                  </div>
                )}
                {discount && (
                  <div className={s.currentPrice}>{discount.currentPrice}</div>
                )}
              </div>
            </th>
          )
        )}
      </tr>
    </thead>
  )
}

export default TableHeader
