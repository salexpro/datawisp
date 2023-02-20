import React from 'react'
import clsx from 'clsx'

import * as s from './Switch.module.scss'

const Switch = ({ first, second, discount, onChange }) => {
  const id = `id-${first}-${second}`

  return (
    <div className={s.switchWrapper}>
      <input
        id={id}
        type="checkbox"
        onChange={(e) => onChange(e.target.checked ? second : first)}
        className={s.switchInput}
      />
      <label htmlFor={id} className={s.labelWrapper}>
        <span
          className={clsx(s.first, { [s.hasDiscount]: discount })}
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
