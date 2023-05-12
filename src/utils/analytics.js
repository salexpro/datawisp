import { GOOGLE_TAG_KEY } from '~constants'

export const hasCookies = (cookies) => cookies[GOOGLE_TAG_KEY] !== undefined

export const gtagReportConversion = (cookies) => {
  if (typeof gtag !== 'undefined' && hasCookies(cookies)) {
    gtag('event', 'conversion', {
      send_to: 'AW-11145057970/EpELCNTnw5cYELKtsMIp',
    })
  }
}
