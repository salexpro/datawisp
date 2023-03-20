import axios from 'axios'

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
