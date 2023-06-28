import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import OverlayTooltip from '~components/OverlayTooltip'
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
      <span className={s.iconWrapper}>
        <Icon name={iconName} size={20} />
      </span>
      <h4 className={s.heading}>{heading}</h4>
      <StructuredText data={text.value} />

      {!!supportsList?.length && (
        <>
          <h4 className={s.supportedHeading}>Supported</h4>
          <div className={s.supportedWrapper}>
            {supportsList.map(({ icon, name }) => (
              <OverlayTooltip key={name} text={name} placement="bottom">
                <div className={s.supportedIcon}>
                  <ImageFormat
                    alt={icon.alt || name}
                    file={icon}
                    width={40}
                    height={40}
                  />
                </div>
              </OverlayTooltip>
            ))}
          </div>
        </>
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
