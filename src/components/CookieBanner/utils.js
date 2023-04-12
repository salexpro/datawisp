import axios from 'axios'

import { GOOGLE_ANALYTIC_COOKIE_KEY, GOOGLE_ADS_COOKIE_KEY } from '~constants'

import { GDPR_COUNTRIES } from './constants'

export const isGDPR = async () => {
  try {
    const res = await axios.get('https://geolocation-db.com/json/')

    if (res.status === 200)
      return GDPR_COUNTRIES.includes(res.data?.country_name)

    return true
  } catch (error) {
    return true
  }
}

export const hasCookies = (cookies) =>
  cookies[GOOGLE_ANALYTIC_COOKIE_KEY] !== undefined &&
  cookies[GOOGLE_ADS_COOKIE_KEY] !== undefined
