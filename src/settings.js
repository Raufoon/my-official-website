const { createContext, useState, useCallback } = require("react")

const _SettingsContext = createContext({ lang: "en" })

export const SettingsContext = _SettingsContext

export function useSettings() {
  const [settings, setSettings] = useState({
    lang: localStorage.getItem("lang") || "en",
  })

  const setLang = useCallback((lang) => {
    localStorage.setItem("lang", lang)
    setSettings((prev) => ({
      ...prev,
      lang,
    }))
  }, [])

  return { settings, setLang }
}
