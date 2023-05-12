import React, { useEffect, useRef, useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Toast } from 'react-bootstrap'
import cn from 'classnames'

import Icon from '~components/Icon'

import { EVENT_KEYS } from '../../constants'
import { events } from '../../api'
import ToastTransition from './ToastTransition'
import { TOAST_AUTOHIDE_DELAY, TOAST_CLEANUP_DELAY } from './constants'

const DataWispToast = (props) => {
  const {
    autohide = true,
    delay = TOAST_AUTOHIDE_DELAY,
    header,
    children,
    tag,
    onClosed,
    toastId,
    variant = '',
    ...rest
  } = props

  const closedCallbackTimeoutRef = useRef()

  const [isToastVisible, setIsToastVisible] = useState(false)

  const showToast = () => setIsToastVisible(true)
  const hideToast = () => {
    setIsToastVisible(false)

    // Clean up toasts from the stack after timeout
    closedCallbackTimeoutRef.current = setTimeout(
      () => onClosed?.(),
      TOAST_CLEANUP_DELAY
    )
  }

  const handleCloseToastsByTag = (tagToClose, options) => {
    if (tagToClose === tag && options?.ignoreToastId !== toastId) hideToast()
  }

  useEffect(() => {
    showToast()
    events.on(EVENT_KEYS.CLOSE_TOASTS_BY_TAG, handleCloseToastsByTag)

    return () => {
      clearTimeout(closedCallbackTimeoutRef.current)
      events.off(EVENT_KEYS.CLOSE_TOASTS_BY_TAG, handleCloseToastsByTag)
    }
  }, [])

  return (
    <Toast
      {...rest}
      autohide={autohide}
      delay={delay}
      show={isToastVisible}
      onClose={hideToast}
      transition={ToastTransition}
      className={cn('form withTransform', { [variant]: variant })}
    >
      <Toast.Header>
        <Icon name={`icon-toast_${variant}`} size={48} />
        <div>
          <div className="toast-header-title">{header}</div>
          <div>{children}</div>
        </div>
      </Toast.Header>
    </Toast>
  )
}

export default DataWispToast
