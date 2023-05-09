import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import { EMAIL_RULE } from '~constants'
import cn from 'classnames'

const RequestDemoForm = ({ className, variant, handleMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  useEffect(() => {
    if (handleMessage)
      handleMessage({
        text: errors?.email?.message,
        isError: !!errors?.email?.message,
      })
  }, [errors?.email])

  const onSubmit = (data) => {
    console.log(data)
    handleMessage({
      text: 'Thank you! Check your email to schedule your demo',
      isError: false,
    })
    reset()
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
        <Button variant={variant || 'primary'} type="submit">
          Request Demo
        </Button>
        {errors?.email && !variant && (
          <Form.Text>{errors.email?.message}</Form.Text>
        )}
      </Form.Group>
    </Form>
  )
}

export default RequestDemoForm
