/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { parse } from 'svg-parser'

import svgSrc from '~components/ui/Icon/icons.svg'
import Icon from '~components/ui/Icon'

import * as style from './SVGSprite.module.scss'

/**
 * SVGSprite component
 */
const SVGSprite = (props) => {
  const { className, variant, ...rest } = props

  const [symbols, setSymbols] = useState([])

  fetch(svgSrc)
    .then((res) => res.text())
    .then((res) => {
      const parsedRes = parse(res)
      const parsedSymbols = parsedRes?.children?.[0]?.children

      if (!parsedSymbols?.length) return

      const formattedSymbols = parsedSymbols
        .filter((symbol) => symbol.tagName === 'symbol')
        .map((symbol) => symbol.properties)
        .map((symbol) => {
          const { viewBox = '0 0 32 32' } = symbol
          const [, , width, height] = viewBox.split(' ')

          return { ...symbol, width, height }
        })

      setSymbols(formattedSymbols)
    })

  return (
    <table
      {...rest}
      className={cn(style.table, { [style[variant]]: variant }, className)}
    >
      <thead>
        <tr>
          <th>Icon</th>
          <th>Icon (inverted)</th>
          <th>Name</th>
          <th>Width</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        {symbols.map((symbol) => (
          <tr>
            <td>
              <div className={style.iconWrapper} title={symbol.id}>
                <Icon name={symbol.id} size={[symbol.width, symbol.height]} />
              </div>
            </td>
            <td>
              <div className={style.iconWrapperBlack} title={symbol.id}>
                <Icon name={symbol.id} size={[symbol.width, symbol.height]} />
              </div>
            </td>
            <td>{symbol.id}</td>
            <td>{symbol.width}</td>
            <td>{symbol.height}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

SVGSprite.defaultProps = {
  className: '',
  variant: 'def',
}

SVGSprite.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'def']),
}

export default SVGSprite
