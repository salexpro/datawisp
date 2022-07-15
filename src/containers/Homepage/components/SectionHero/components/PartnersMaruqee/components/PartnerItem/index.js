import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as s from './PartnerItem.module.scss'

const PartnerItem = (props) => {
  const { className, name, file, ...rest } = props

  return (
    <div {...rest} className={cn(s.partnerItem, className)} title={name}>
      <GatsbyImage alt={name} image={getImage(file)} loading="eager" />
    </div>
  )
}

PartnerItem.defaultProps = {
  className: undefined,
}

PartnerItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default PartnerItem
