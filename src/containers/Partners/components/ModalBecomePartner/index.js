import React from 'react'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useForm as useFormSpree } from '@formspree/react'
import cn from 'clsx'

import { addToastToStack } from '~components/ToastManager'
import { TOAST_TITLE } from '~constants'

import { PARTNER_FORM_DATA } from './constants'

const ModalBecomePartner = (props) => {
  const { show, onHide } = props

  const [state, handleSendData] = useFormSpree(
    process.env.GATSBY_FORM_SPREE_BECOME_PARTNER_TOKEN || 'mzbqynog'
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
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
    <Modal centered backdrop="static" show={show} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Become a partner</Modal.Title>
        <p className="modal-subtitle">
          Fill in your details in the form and we will contact you to clarify
          the partnership
        </p>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
          {PARTNER_FORM_DATA.map(
            ({ id, label, required, pattern, ...rest }) => (
              <Form.Group controlId={id} key={id} className="form-group">
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  {...rest}
                  {...register(id, {
                    required,
                    pattern,
                  })}
                  className={cn({ error: errors?.[id] })}
                />
                {errors?.[id] && <Form.Text>{errors?.[id]?.message}</Form.Text>}
              </Form.Group>
            )
          )}

          <Button
            type="submit"
            variant="primary"
            disabled={state.submitting}
            className="form-submit"
          >
            {!state?.submitting ? (
              'Send an offer'
            ) : (
              <Spinner animation="border" size="sm" />
            )}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalBecomePartner
