import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

import Icon from '~components/Icon'

const DWToast = ({ show, onHide, title, variant = 'success' }) => {
  return (
    <ToastContainer>
      <Toast show={show} className="form" onClose={onHide}>
        <Toast.Header>
          <Icon name={`icon-toast_${variant}`} size={48} />
          {title}
        </Toast.Header>
      </Toast>
    </ToastContainer>
  )
}

export default DWToast
