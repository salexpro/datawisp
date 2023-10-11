import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-bootstrap'
import cn from 'clsx'

import { EVENT_KEYS } from './constants'
import { events } from './api'
import DataWispToast from './components/DataWispToast'

const ToastManager = (props) => {
  const { className, ...rest } = props

  const [toastsStack, setToastsStack] = useState([])

  const appendToast = (toast) =>
    setToastsStack((prevState) => [...prevState, toast])

  const removeToastFromStack = (toastIdToRemove) =>
    setToastsStack((prevState) =>
      prevState.filter(({ toastId }) => toastId !== toastIdToRemove)
    )

  const handleAddToastToStack = (toastOptions) => {
    if (!toastOptions.content) return
    appendToast(toastOptions)
  }

  useEffect(() => {
    events.on(EVENT_KEYS.ADD_TOAST_TO_STACK, handleAddToastToStack)

    return () => {
      events.off(EVENT_KEYS.ADD_TOAST_TO_STACK, handleAddToastToStack)
    }
  }, [])

  return (
    <ToastContainer {...rest} className={cn('top-end', className)}>
      {toastsStack.map(
        ({ toastId, content, header, tag, variant = 'danger' }) => (
          <DataWispToast
            key={toastId}
            toastId={toastId}
            tag={tag}
            header={header}
            onClosed={() => removeToastFromStack(toastId)}
            variant={variant}
          >
            {content}
          </DataWispToast>
        )
      )}
    </ToastContainer>
  )
}

export default ToastManager

export * from './utils'
export * from './components/DataWispToast/constants'
