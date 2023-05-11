import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const OverlayTooltip = ({ children, text }) => {
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>{text}</Tooltip>}>
      {children}
    </OverlayTrigger>
  )
}

export default OverlayTooltip
