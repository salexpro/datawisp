// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuid } from 'uuid'

import { events } from './api'
import { EVENT_KEYS } from './constants'

export const addToastToStack = (toastOptions) => {
  events.emit(EVENT_KEYS.ADD_TOAST_TO_STACK, {
    toastId: uuid(),
    ...toastOptions,
  })
}
