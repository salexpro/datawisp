import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { StructuredText } from 'react-datocms'

import ImageFormat from '~components/ImageFormat'

import * as s from './IntegrationItem.module.scss'

const IntegrationItem = (props) => {
  const { heading, text, image, className, ...rest } = props

  return (
    <div {...rest} className={clsx(s.integrationItem, className)}>
      <ImageFormat file={image} alt={heading} className={s.img} />
      <h3 className={s.heading}>{heading}</h3>
      <StructuredText data={text.value} />
    </div>
  )
}

IntegrationItem.defaultProps = {
  className: '',
}

IntegrationItem.propTypes = {
  className: PropTypes.string,
}

export default IntegrationItem
