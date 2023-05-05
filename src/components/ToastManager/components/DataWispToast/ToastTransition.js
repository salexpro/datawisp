/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ENTERING, EXITING, EXITED } from 'react-transition-group/Transition'
import { Fade } from 'react-bootstrap'

const fadeStyles = {
  [ENTERING]: 'showing slideFromRight',
  [EXITING]: 'showing show collapseVertically',
  [EXITED]: 'collapseVertically',
}

const ToastTransition = React.forwardRef((props, ref) => {
  const { children, ...rest } = props

  return (
    <Fade {...rest} ref={ref} transitionClasses={fadeStyles}>
      {children}
    </Fade>
  )
})

export default ToastTransition
