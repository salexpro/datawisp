import React, { useEffect } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import { useForm as useFormSpree } from '@formspree/react'

import { addToastToStack } from '~components/ToastManager'
import { EMAIL_RULE, TOAST_TITLE } from '~constants'

const RequestDemoForm = ({ className, variant, handleMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const [state, handleSendData] = useFormSpree('xzbqwbpz')

  useEffect(() => {
    if (handleMessage)
      handleMessage({
        text: errors?.email?.message,
        isError: !!errors?.email?.message,
      })
  }, [errors?.email])

  const handleResponseMessage = (text, ok) => {
    if (handleMessage)
      handleMessage({
        text,
        isError: ok,
      })
  }

  const onSubmit = (data) => {
    handleSendData(data)
      .then((res) => {
        if (res?.body.ok) {
          addToastToStack({ variant: 'success', content: TOAST_TITLE.success })
          handleResponseMessage(
            'Thank you! Check your email to schedule your demo',
            false
          )
          reset()
          return
        }
        addToastToStack({ variant: 'error', content: TOAST_TITLE.error })
        handleResponseMessage(TOAST_TITLE.error, true)
      })
      .catch(() => {
        addToastToStack({ variant: 'error', content: TOAST_TITLE.error })
        handleResponseMessage(TOAST_TITLE.error, true)
      })
  }

  return (
    <Form
      noValidate
      autoComplete="off"
      className={className}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Group controlId="requestDemo" className="form-group demo">
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
  )
}

export default RequestDemoForm
