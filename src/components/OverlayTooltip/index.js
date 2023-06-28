import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const OverlayTooltip = ({ children, text, ...rest }) => {
  return (
    <OverlayTrigger {...rest} overlay={<Tooltip>{text}</Tooltip>}>
      {children}
    </OverlayTrigger>
  )
}

export default OverlayTooltip
