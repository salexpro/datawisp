import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Badge } from 'react-bootstrap'
import { StructuredText } from 'react-datocms'

import Icon from '~components/Icon'

import * as s from './IntegrationItem.module.scss'

const IntegrationItem = (props) => {
  const { heading, iconName, text, image, supports, className, ...rest } = props

  return (
    <div {...rest} className={classNames(s.integrationItem, className)}>
      <span className={s.iconWrapper}>
        <Icon name={iconName} size={20} />
      </span>
      <h4 className={s.heading}>{heading}</h4>
      <StructuredText data={text.value} />
      <h4 className={s.supportedHeading}>Supported</h4>
      <div className={s.supportedWrapper}>
        {supports.map((badge) => (
          <Badge key={badge.id} bg="integration">
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
