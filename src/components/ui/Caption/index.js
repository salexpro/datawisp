import React from 'react'

import * as s from './Caption.module.scss'

const Caption = ({ children }) => {
  return <span className={s.caption}>{children}</span>
}

export default Caption
