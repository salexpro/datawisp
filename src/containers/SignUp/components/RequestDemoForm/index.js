import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import { EMAIL_RULE } from '~constants'
import cn from 'classnames'

const RequestDemoForm = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
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
          className={cn({ error: errors?.email })}
        />
        <Button type="submit">Request Demo</Button>
        {errors?.email && <Form.Text>{errors.email?.message}</Form.Text>}
      </Form.Group>
    </Form>
  )
}

export default RequestDemoForm
