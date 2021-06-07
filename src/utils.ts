import { EVENTS } from "./constants"
import { AppTheme } from "./global-types"

export function getAppThemeFromDayTime(): AppTheme {
  return new Date(Date.now()).getHours() > 18 ? "dark" : "light"
}

export function getAppTheme(): AppTheme {
  const themeFromStorage = localStorage.getItem("theme")
  return themeFromStorage
    ? (themeFromStorage as AppTheme)
    : getAppThemeFromDayTime()
}

export function toggleTheme() {
  var event = new CustomEvent(EVENTS.TOGGLE_THEME, {
    detail: {
      theme: getAppTheme() === "dark" ? "light" : "dark",
    },
  })
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

export function rand(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function lightColor(): string {
  return `hsl(${rand(0, 360)}, ${rand(1, 100)}%, 60%)`
}
