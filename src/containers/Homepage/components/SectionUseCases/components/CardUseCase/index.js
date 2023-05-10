import React from 'react'
import cn from 'classnames'
import { StructuredText } from 'react-datocms'
import Icon from '~components/Icon'

import * as s from './CardUseCase.module.scss'

const CardUseCase = ({ isPlaceholder, iconName, heading, text, className }) => (
  <div className={cn(s.cardUseCase, className)}>
    <div className={s.imageBlock}>
      {!isPlaceholder && <Icon name={iconName} size={72} className={s.icon} />}
    </div>
    {isPlaceholder ? (
      <div className={s.placeholderText} />
    ) : (
      <h3 className="h4">{heading}</h3>
    )}
    {isPlaceholder ? (
      <div className={s.gridPlaceholders}>
        <div className={s.placeholderText} />
        <div className={s.placeholderText} />
        <div className={s.placeholderText} />
      </div>
    ) : (
      <StructuredText data={text} />
    )}
  </div>
)

export default CardUseCase
