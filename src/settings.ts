import { AppSettings } from "./global-types"

const defaultSettings: AppSettings = {
  lang: "en",
  theme: "dark",
}

export function getDefaultSettings(): AppSettings {
  return defaultSettings
}

export function getSavedSettings(): AppSettings {
  return {
    lang: localStorage.getItem("lang") || defaultSettings.lang,
    theme: localStorage.getItem("theme") || defaultSettings.theme,
  } as AppSettings
}
