import React from 'react'
import cn from 'clsx'

import ButtonGroup from '~components/ui/ButtonGroup'
import * as s from './TableHeader.module.scss'

const TableHeader = ({ data, isMobile }) => (
  <thead>
    <tr>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <th />
      {data.map(
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
          button,
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

              {!!button?.length && (
                <ButtonGroup data={button} className={s.button} />
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
