import React from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'
import { StructuredText } from 'react-datocms'

import ImageFormat from '~components/ImageFormat'
import Icon from '~components/Icon'

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
      <div className={s.integrationHeading}>
        <span className={s.iconWrapper}>
          <Icon name={iconName} size={20} />
        </span>
        <h4 className={s.heading}>{heading}</h4>
        <StructuredText data={text.value} />
      </div>

      <div>
        {!!supportsList?.length && (
          <>
            <h4 className={s.supportedHeading}>Supported</h4>
            <ul className={s.supportedList}>
              {supportsList.map(({ icon, name }) => (
                <li key={name} className={s.supportedItem}>
                  <ImageFormat
                    alt={icon.alt || name}
                    file={icon}
                    width={24}
                    height={24}
                  />
                  {name}
                </li>
              ))}
            </ul>
          </>
        )}
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
