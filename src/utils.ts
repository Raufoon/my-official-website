import { EVENTS } from './constants'

export function toggleTheme() {
  var event = new CustomEvent(EVENTS.TOGGLE_THEME)
  window.dispatchEvent(event)
}

export function setLang(lang: string) {
  var event = new CustomEvent(EVENTS.SET_LANG, { detail: { lang } })
  window.dispatchEvent(event)
}

export function getSStorageItemAsJSON(key: string): any {
  const item = sessionStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

export function getLStorageItemAsJSON(key: string): any {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}
