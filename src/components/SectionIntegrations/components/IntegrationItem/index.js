import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { StructuredText } from 'react-datocms'

import ImageFormat from '~components/ui/ImageFormat'
import Icon from '~components/ui/Icon'

import * as s from './IntegrationItem.module.scss'

const IntegrationItem = (props) => {
  const {
    heading,
    iconName,
    text,
    image,
    supportsList,
    isThreeColumn,
    className,
    ...rest
  } = props

  return (
    <div
      {...rest}
      className={cn(
        s.integrationItem,
        { [s.threeColumn]: isThreeColumn },
        className
      )}
    >
      <h3 className={cn('h5', s.heading)}>
        <Icon name={iconName} size={24} />
        {heading}
      </h3>
      <StructuredText data={text.value} />

      {!!supportsList?.length && (
        <div>
          <h4 className={s.supportedHeading}>Supported</h4>
          <ul className={s.supportedList}>
            {supportsList.map(({ icon, name }) => (
              <li key={name} className={s.supportedItem}>
                <ImageFormat
                  alt={icon.alt || name}
                  file={icon}
                  width={32}
                  height={32}
                />
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
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
