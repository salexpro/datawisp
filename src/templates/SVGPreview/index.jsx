import React from 'react'

import S from '~components/seo'

import SVGSprite from './components/SVGSprite'

import * as style from './SVGPreview.module.scss'

/**
 * SVGPreview component
 */
const SVGPreview = () => {
  return (
    <div className={style.svgPreview}>
      <S title="SVG Preview" />
      <SVGSprite className={style.table} />
    </div>
  )
}

export default SVGPreview
