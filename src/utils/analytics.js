import { GOOGLE_ADS_COOKIE_KEY, GOOGLE_ANALYTIC_COOKIE_KEY } from '~constants'

export const hasCookies = (cookies) =>
  cookies[GOOGLE_ANALYTIC_COOKIE_KEY] !== undefined &&
  cookies[GOOGLE_ADS_COOKIE_KEY] !== undefined

export const gtagReportConversion = (cookies) => {
  if (typeof gtag !== 'undefined' && hasCookies(cookies)) {
    gtag('event', 'conversion', {
      send_to: 'AW-11145057970/EpELCNTnw5cYELKtsMIp',
    })
  }
}
