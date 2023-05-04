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
  const { children, onEntered, ...rest } = props

  const handleEntered = (node, isAppearing) => {
    // Set explicit height to make collapse animation work
    // eslint-disable-next-line no-param-reassign
    if (node) node.style.height = `${node.getBoundingClientRect().height}px`

    onEntered?.(node, isAppearing)
  }

  return (
    <Fade
      {...rest}
      ref={ref}
      transitionClasses={fadeStyles}
      onEntered={handleEntered}
    >
      {children}
    </Fade>
  )
})

export default ToastTransition
