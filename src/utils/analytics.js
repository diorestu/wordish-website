const STORAGE_KEY = 'wordish_consent'
const UTM_KEY = 'wordish_utm'

export function hasConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'granted'
  } catch {
    return false
  }
}

export function grantConsent() {
  try {
    localStorage.setItem(STORAGE_KEY, 'granted')
  } catch {
    // ignore
  }
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted' })
  }
}

export function denyConsent() {
  try {
    localStorage.setItem(STORAGE_KEY, 'denied')
  } catch {
    // ignore
  }
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied' })
  }
}

export function captureUtm() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const utm = {}
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
    const value = params.get(key)
    if (value) utm[key] = value
  }
  if (Object.keys(utm).length) {
    try {
      sessionStorage.setItem(UTM_KEY, JSON.stringify(utm))
    } catch {
      // ignore
    }
  }
}

export function getUtm() {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_KEY) || '{}')
  } catch {
    return {}
  }
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return
  const payload = { ...getUtm(), ...params }
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: name, ...payload })

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, payload)
  }
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', name, payload)
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', name, payload)
  }
}
