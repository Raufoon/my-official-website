import { useEffect, useState } from "react"
import { EVENTS } from "../constants"
import { getSavedSettings } from "../settings"

export default function useAppSettings() {
  const [settings, setSettings] = useState(getSavedSettings())

  useEffect(function onSettingsEvents() {
    function getHandler(property: string) {
      return (e: CustomEvent) => {
        setSettings((prev) => ({
          ...prev,
          [property]: e.detail[property],
        }))
      }
    }

    const onThemeChange = getHandler("theme")
    const onLangChange = getHandler("lang")

    window.addEventListener(EVENTS.SET_LANG, onLangChange as EventListener)
    window.addEventListener(EVENTS.TOGGLE_THEME, onThemeChange as EventListener)

    return function () {
      window.removeEventListener(EVENTS.SET_LANG, onLangChange as EventListener)
      window.removeEventListener(
        EVENTS.TOGGLE_THEME,
        onThemeChange as EventListener
      )
    }
  }, [])

  useEffect(
    function onLanguageChange() {
      localStorage.setItem("lang", settings.lang)
    },
    [settings.lang]
  )

  useEffect(
    function onThemeChange() {
      localStorage.setItem("theme", settings.theme)
    },
    [settings.theme]
  )

  return settings
}
