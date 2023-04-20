import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useForm as useFormSpree } from '@formspree/react'
import classNames from 'classnames'
import { useCookies } from 'react-cookie'

import { GOOGLE_ADS_COOKIE_KEY, GOOGLE_ANALYTIC_COOKIE_KEY } from '~constants'
import { gtagReportConversion } from '~utils/analytics'

import { EMAIL_RULE } from './constants'
import * as s from './ModalRequestDemo.module.scss'

const ModalRequestDemo = (props) => {
  const { show, onHide } = props
  const [cookies] = useCookies([
    GOOGLE_ANALYTIC_COOKIE_KEY,
    GOOGLE_ADS_COOKIE_KEY,
  ])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const [state, handleSendData] = useFormSpree(
    process.env.GATSBY_FORM_SPREE_TOKEN
  )

  const onSubmit = (data) => {
    gtagReportConversion(cookies)
    handleSendData(data)
    reset()
    onHide()
  }

  const handleHide = () => {
    onHide()
    reset()
  }

  return (
    <Modal size="sm" backdrop="static" centered show={show} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Request demo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formEmail" className="form-group">
            <Form.Label>Email address *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              {...register('email', {
                required: 'Required',
                pattern: {
                  value: EMAIL_RULE,
                  message: 'Invalid email address',
                },
              })}
              className={classNames({ error: errors?.email })}
            />
            {errors?.email && <Form.Text>{errors?.email?.message}</Form.Text>}
          </Form.Group>
          <Form.Group controlId="formWorkForYou" className="form-group">
            <Form.Label>Give us a few times that work for you</Form.Label>
            <Form.Control
              type="text"
              placeholder="Option"
              {...register('work_for_you')}
            />
          </Form.Group>
          <Form.Group
            controlId="formBiggestDataChallenge"
            className="form-group"
          >
            <Form.Label>Biggest data challenge you need help with?</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Option"
              {...register('data_challenge')}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            disabled={state.submitting}
            className={s.submitButton}
          >
            Request demo
          </Button>
          <div className={s.text}>
            By submitting this form you agree to our{' '}
            <a
              href="https://app.datawisp.io/assets/privacy_v0.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalRequestDemo
