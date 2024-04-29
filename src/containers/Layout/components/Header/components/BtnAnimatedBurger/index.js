import React from 'react'
import cn from 'classnames'

import * as s from './BtnAnimatedBurger.module.scss'

const BtnAnimatedBurger = React.forwardRef((props, ref) => {
  return (
    <button
      {...props}
      type="button"
      className={s.hamb}
      ref={ref}
      aria-label="navigation"
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        preserveAspectRatio="none"
        className={s.hamb_icon}
      >
        <path
          className={cn(s.hamb_line, s.hamb_line_top)}
          d="M4 8h16 c1 0 3 .4 3 2s-2 2-3 2 h-8"
        />
        <path className={cn(s.hamb_line, s.hamb_line_middle)} d="M4 12 h16" />
        <path
          className={cn(s.hamb_line, s.hamb_line_bottom)}
          d="M20 16 h-16 c-1 0-3 -.4-3 -2s2 -2 3 -2h8"
        />
      </svg>
    </button>
  )
})

export default BtnAnimatedBurger
