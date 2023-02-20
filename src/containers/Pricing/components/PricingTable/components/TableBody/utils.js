import { Form } from 'react-bootstrap'
import React from 'react'

import Icon from '~components/Icon'
import { inactive } from './TableBody.module.scss'

export const getCellByType = (cell) => {
  switch (cell.type) {
    case 'checkBox':
      return <Form.Check type="radio" checked readOnly />
    case 'inactive':
      return <Icon name="icon-plan-inactive" size={20} className={inactive} />
    case 'text':
      return cell.text
    default:
      return ''
  }
}
