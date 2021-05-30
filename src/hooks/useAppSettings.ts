import { useEffect, useState } from "react"
import { EVENTS } from "../constants"
import { getSavedSettings } from "../settings"

export default function useAppSettings() {
  const [settings, setSettings] = useState(getSavedSettings())

  useEffect(function onSettingsEvents() {
    /* To create a change handler for settings[property] */
    function getHandler(property: string) {
      return (e: CustomEvent) => {
        setSettings((prev) => ({
          ...prev,
          [property]: e.detail[property],
        }))
        localStorage.setItem(property, e.detail[property])
      }
    }

    const onThemeChange = getHandler("theme")
    const onLangChange = getHandler("lang")

    const { SET_LANG, TOGGLE_THEME } = EVENTS

    window.addEventListener(SET_LANG, onLangChange as EventListener)
    window.addEventListener(TOGGLE_THEME, onThemeChange as EventListener)

    return function () {
      window.removeEventListener(SET_LANG, onLangChange as EventListener)
      window.removeEventListener(TOGGLE_THEME, onThemeChange as EventListener)
    }
  }, [])

  return settings
}
