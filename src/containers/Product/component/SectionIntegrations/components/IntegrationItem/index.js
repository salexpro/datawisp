import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Badge } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import ImageFormat from '~components/ImageFormat'

import * as s from './IntegrationItem.module.scss'

const IntegrationItem = (props) => {
  const { heading, text, image, supports, className, ...rest } = props

  return (
    <div {...rest} className={clsx(s.integrationItem, className)}>
      <ImageFormat file={image} alt={heading} className={s.img} />
      <h3 className={s.heading}>{heading}</h3>
      <StructuredText data={text.value} />
      <h4 className={s.supportedHeading}>Supported</h4>
      <div className={s.supportedWrapper}>
        {supports.map((badge, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Badge key={index} bg="integration">
            {badge.text}
          </Badge>
        ))}
      </div>
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
