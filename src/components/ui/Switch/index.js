import React from 'react'
import cn from 'classnames'

import * as s from './Switch.module.scss'

const Switch = ({ first, second, discount, onChange, className }) => {
  const id = `id-${first}-${second}`

  return (
    <div className={cn(s.switchWrapper, className)}>
      <input
        id={id}
        type="checkbox"
        onChange={(e) => onChange(e.target.checked ? second : first)}
        className={s.switchInput}
      />
      <label htmlFor={id} className={s.labelWrapper}>
        <span
          className={cn(s.first, { [s.hasDiscount]: discount })}
          data-discount={discount}
        >
          {first}
        </span>
        <span className={s.second}>{second}</span>
      </label>
    </div>
  )
}

export default Switch
