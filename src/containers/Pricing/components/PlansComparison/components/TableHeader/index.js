import React from 'react'
import cn from 'clsx'
import { Button } from 'react-bootstrap'

import * as s from './TableHeader.module.scss'

const TableHeader = ({ header, isMobile }) => (
  <thead>
    <tr>
      <th> </th>
      {header.map(
        ({
          id,
          isSelected,
          isComingSoon,
          tagText,
          title,
          description,
          price,
          period,
          discount,
          showButton,
          buttonText,
          buttonLink,
        }) => (
          <th
            key={id}
            className={cn(s.cell, {
              [s.selected]: isSelected,
              [s.mobile]: isMobile,
            })}
          >
            <div className={s.headerWrapper}>
              {tagText && (
                <div
                  className={cn(s.tag, {
                    [s.isComingSoon]: isComingSoon,
                  })}
                >
                  {tagText}
                </div>
              )}

              {!isMobile && <div className={s.title}>{title}</div>}
              {description && <p className={s.subTitle}>{description}</p>}

              {price && (
                <div className={s.price}>
                  {price}
                  {period && <span>/{period}</span>}
                </div>
              )}

              {showButton && (
                <Button
                  variant="outline-secondary"
                  href={buttonLink}
                  target="_blank"
                  rel="noreferrer"
                  className={s.button}
                >
                  {buttonText}
                </Button>
              )}

              {discount && (
                <div className={s.previousPrice}>{discount.previousPrice}</div>
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

export default TableHeader
