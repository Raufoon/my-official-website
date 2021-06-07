import { EVENTS } from "./constants"

export function toggleTheme() {
  var event = new CustomEvent(EVENTS.TOGGLE_THEME, {
    detail: {
      theme: localStorage.getItem("theme") === "dark" ? "light" : "dark",
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
