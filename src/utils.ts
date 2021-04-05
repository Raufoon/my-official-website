import { EVENTS } from './constants'

export function toggleTheme() {
  var event = new CustomEvent(EVENTS.TOGGLE_THEME)
  window.dispatchEvent(event)
}

export function setLang(lang: string) {
  var event = new CustomEvent(EVENTS.SET_LANG, { detail: { lang } })
  window.dispatchEvent(event)
}
