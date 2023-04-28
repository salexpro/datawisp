import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useForm as useFormSpree } from '@formspree/react'
import classNames from 'classnames'

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
    reset()
    onHide()
  }

  const handleHide = () => {
    onHide()
    reset()
  }

  return (
    <Modal
      centered
      backdrop="static"
      show={show}
      onHide={handleHide}
      className="partner"
    >
      <Modal.Header closeButton>
        <Modal.Title>Become a partner</Modal.Title>
        <p className="modal-subtitle">
          Fill in your details in the form and we will contact you to clarify
          the partnership
        </p>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)} className="partner">
          {PARTNER_FORM_DATA.map(
            ({ id, label, required, pattern, ...rest }) => (
              <Form.Group controlId={id} className="form-group">
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  {...rest}
                  {...register(id, {
                    required,
                    pattern,
                  })}
                  className={classNames({ error: errors?.[id] })}
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
            Send an offer
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalBecomePartner
