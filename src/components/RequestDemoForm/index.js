import React, { useState, useEffect, useRef } from 'react'
import { Button, Form, Spinner, Overlay, Toast } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import { useForm as useFormSpree } from '@formspree/react'

import { addToastToStack } from '~components/ToastManager'
import { EMAIL_RULE, TOAST_TITLE } from '~constants'
import Icon from '~components/Icon'
import useMatchMedia from '~hooks/useMatchMedia'

const RequestDemoForm = ({ id, className, variant, handleMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const formRef = useRef(null)

  const [overlayState, setOverlayState] = useState(null)
  const [state, handleSendData] = useFormSpree(
    process.env.GATSBY_FORM_SIGNUP || 'xzbqwbpz'
  )

  const isUpMd = useMatchMedia('(min-width: 768px)')

  const handleResponseMessage = (text, ok) => {
    if (handleMessage)
      handleMessage({
        text,
        isError: ok,
      })
  }

  const handleToasts = (toastState) => {
    if (isUpMd) {
      setOverlayState(toastState)
    } else if (!overlayState) {
      addToastToStack(toastState)
    }

    handleResponseMessage(toastState.content, toastState.variant === 'error')
  }

  useEffect(() => {
    handleResponseMessage(errors?.email?.message, !!errors?.email?.message)
  }, [errors?.email])

  const onSubmit = (data) => {
    handleSendData(data)
      .then((res) => {
        if (res?.body.ok) {
          handleToasts(TOAST_TITLE.success)
          reset()
          return
        }
        handleToasts(TOAST_TITLE.error)
      })
      .catch(() => {
        handleToasts(TOAST_TITLE.error)
      })
  }

  return (
    <>
      <Form
        noValidate
        autoComplete="off"
        className={className}
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <Form.Group
          controlId={`request-demo-form-${id}`}
          className="form-group demo"
        >
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            {...register('email', {
              required: {
                value: true,
                message: 'Please provide an email address',
              },
              pattern: {
                value: EMAIL_RULE,
                message: 'Please enter a valid email address',
              },
            })}
            className={cn({ error: errors?.email }, variant)}
          />
          <Button
            variant={variant || 'primary'}
            disabled={state.submitting}
            type="submit"
          >
            {!state.submitting ? 'Request demo' : <Spinner size="sm" />}
          </Button>
          {errors?.email && !variant && (
            <Form.Text>{errors.email?.message}</Form.Text>
          )}
        </Form.Group>
      </Form>

      <Overlay
        target={formRef.current}
        show={!!overlayState}
        placement="top-start"
        popperConfig={{
          modifiers: [
            {
              name: 'offset',
              options: { offset: [0, 8] },
            },
          ],
        }}
      >
        {(props) => (
          <Toast
            {...props}
            className={cn('form', {
              [overlayState?.variant]: overlayState?.variant,
            })}
            autohide
            delay={3000}
            onClose={() => setOverlayState(null)}
          >
            <Toast.Header>
              <Icon name={`icon-toast_${overlayState?.variant}`} size={48} />
              <div>
                <div className="toast-header-title">{overlayState?.header}</div>
                <div>{overlayState?.content}</div>
              </div>
            </Toast.Header>
          </Toast>
        )}
      </Overlay>
    </>
  )
}

export default RequestDemoForm
