import React from 'react'
import { Modal, Form, Button, Spinner } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useForm as useFormSpree } from '@formspree/react'
import cn from 'classnames'
import { useCookies } from 'react-cookie'

import { GOOGLE_TAG_KEY, EMAIL_RULE, TOAST_TITLE } from '~constants'
import { gtagReportConversion } from '~utils/analytics'
import { addToastToStack } from '~components/ToastManager'

import * as s from './ModalRequestDemo.module.scss'

const ModalRequestDemo = (props) => {
  const {
    show,
    onHide,
    heading,
    emailLabel,
    emailPlaceholder,
    emailError,
    emailRequiredError,
    optionLabel,
    optionPlaceholder,
    textareaLabel,
    textareaPlaceholder,
    submitButtonText,
    footerText,
    footerLink,
  } = props
  const [cookies] = useCookies([GOOGLE_TAG_KEY])
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
      .then((res) => {
        if (res?.body.ok) {
          addToastToStack(TOAST_TITLE.success)
          reset()
          onHide()
          return
        }
        addToastToStack(TOAST_TITLE.error)
      })
      .catch(() => {
        addToastToStack(TOAST_TITLE.error)
      })
  }

  const handleHide = () => {
    onHide()
    reset()
  }

  return (
    <Modal size="sm" backdrop="static" centered show={show} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Form.Group controlId="formEmail" className="form-group">
            <Form.Label>{emailLabel}</Form.Label>
            <Form.Control
              type="email"
              placeholder={emailPlaceholder}
              {...register('email', {
                required: emailRequiredError,
                pattern: {
                  value: EMAIL_RULE,
                  message: emailError,
                },
              })}
              className={cn({ error: errors?.email })}
            />
            {errors?.email && <Form.Text>{errors?.email?.message}</Form.Text>}
          </Form.Group>
          <Form.Group controlId="formWorkForYou" className="form-group">
            <Form.Label>{optionLabel}</Form.Label>
            <Form.Control
              type="text"
              placeholder={optionPlaceholder}
              {...register('work_for_you')}
            />
          </Form.Group>
          <Form.Group
            controlId="formBiggestDataChallenge"
            className="form-group"
          >
            <Form.Label>{textareaLabel}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={textareaPlaceholder}
              {...register('data_challenge')}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            disabled={state.submitting}
            className="form-submit full"
          >
            {!state.submitting ? (
              submitButtonText
            ) : (
              <Spinner animation="border" size="sm" />
            )}
          </Button>
          <div className={s.text}>
            {footerText}{' '}
            <a href={footerLink.url} target="_blank" rel="noreferrer">
              {footerLink.text}
            </a>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalRequestDemo
