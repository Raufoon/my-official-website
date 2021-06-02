import { AppSettings } from "./global-types"

const defaultSettings: AppSettings = {
  lang: "en",

  // Past 6pm, dark mode will be enabled if user didn't set any mode explicitly
  theme: new Date(Date.now()).getHours() > 18 ? "dark" : "light",
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
