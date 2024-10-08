import React, { useState, useEffect, useRef } from 'react'
import { Button, Form, Spinner, Toast, ToastContainer } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import { useForm as useFormSpree } from '@formspree/react'
import { graphql, useStaticQuery } from 'gatsby'

import { addToastToStack } from '~components/ToastManager'
import { EMAIL_RULE, TOAST_TITLE } from '~constants'
import Icon from '~components/ui/Icon'
import useMatchMedia from '~hooks/useMatchMedia'

const RequestDemoForm = ({ id, className, variant, handleMessage }) => {
  const formData = useStaticQuery(graphql`
    query Form {
      datoCmsLeadGenerationPage {
        emailInputPlaceholder
        emailInputErrorMessage
        emailInputRequiredErrorMessage
        submitButtonText
      }
    }
  `)

  const {
    emailInputPlaceholder,
    emailInputErrorMessage,
    emailInputRequiredErrorMessage,
    submitButtonText,
  } = formData.datoCmsLeadGenerationPage

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
          placeholder={emailInputPlaceholder}
          {...register('email', {
            required: {
              value: true,
              message: emailInputRequiredErrorMessage,
            },
            pattern: {
              value: EMAIL_RULE,
              message: emailInputErrorMessage,
            },
          })}
          className={cn({ error: errors?.email }, variant)}
        />
        <Button
          variant={variant || 'primary'}
          disabled={state.submitting}
          type="submit"
        >
          {!state.submitting ? submitButtonText : <Spinner size="sm" />}
        </Button>
        {errors?.email && !variant && (
          <Form.Text>{errors.email?.message}</Form.Text>
        )}

        <ToastContainer position="top-start" className="absolute">
          <Toast
            show={!!overlayState}
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
        </ToastContainer>
      </Form.Group>
    </Form>
  )
}

export default RequestDemoForm
