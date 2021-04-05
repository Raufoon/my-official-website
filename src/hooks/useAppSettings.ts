import { useEffect, useState } from 'react'
import { EVENTS } from '../constants'
import {
  darkThemeVariables,
  getSavedSettings,
  lightThemeVariables,
  ThemeCSSVariables,
} from '../settings'

export default function useAppSettings() {
  const [settings, setSettings] = useState(getSavedSettings())

  useEffect(function onSettingsEvents() {
    function toggleTheme() {
      setSettings((prev) => ({
        ...prev,
        theme: prev.theme === 'dark' ? 'light' : 'dark',
      }))
    }
    function setLang(e: CustomEvent) {
      setSettings((prev) => ({
        ...prev,
        lang: e.detail.lang,
      }))
    }
    window.addEventListener(EVENTS.SET_LANG, setLang as EventListener)
    window.addEventListener(EVENTS.TOGGLE_THEME, toggleTheme as EventListener)

    return function () {
      window.removeEventListener(EVENTS.SET_LANG, setLang as EventListener)
      window.removeEventListener(
        EVENTS.TOGGLE_THEME,
        toggleTheme as EventListener
      )
    }
  }, [])

  useEffect(
    function onThemeChange() {
      const themeCSSvariables: ThemeCSSVariables =
        settings.theme === 'light' ? lightThemeVariables : darkThemeVariables

      themeCSSvariables.forEach(([key, value]) =>
        document.body.style.setProperty(key, value)
      )

      localStorage.setItem('theme', settings.theme)
    },
    [settings.theme]
  )

  useEffect(
    function onLanguageChange() {
      localStorage.setItem('lang', settings.lang)
    },
    [settings.lang]
  )

  return settings
}
