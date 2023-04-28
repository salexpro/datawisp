import { EMAIL_RULE } from '~constants'

export const PARTNER_FORM_DATA = [
  {
    id: 'name',
    label: 'Your name *',
    type: 'text',
    placeholder: 'Enter your name',
    required: {
      value: true,
      message: 'Please provide your name',
    },
  },
  {
    id: 'website',
    label: 'Company website *',
    type: 'url',
    placeholder: 'https://company.com',
    required: {
      value: true,
      message: 'Please provide a company website',
    },
  },
  {
    id: 'email',
    label: 'Work email *',
    type: 'email',
    placeholder: 'company@mail.com',
    required: {
      value: true,
      message: 'Please provide an email address',
    },
    pattern: {
      value: EMAIL_RULE,
      message: 'Please enter a valid email address',
    },
  },
  {
    id: 'message',
    label: 'Your message',
    as: 'textarea',
    placeholder: 'Enter your message',
    rows: 4,
  },
]
