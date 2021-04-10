import { AppSettings, ThemeCSSVariables } from './global-types'

const defaultSettings: AppSettings = {
  lang: 'en',
  theme: 'dark',
}

export function getDefaultSettings(): AppSettings {
  return defaultSettings
}

export function getSavedSettings(): AppSettings {
  const savedSettings = {
    lang: localStorage.getItem('lang'),
    theme: localStorage.getItem('theme'),
  }
  return {
    ...savedSettings,
    ...defaultSettings,
  }
}

export const lightThemeVariables: ThemeCSSVariables = [
  ['--color-bg', '#f5f5f5'],
  ['--color-bg-blur', 'rgba(245, 245, 245, 1)'],
  ['--color-2', '#fff'],
  ['--color-text', '#0e1111'],
  ['--color-icon', '#0e1111'],
  ['--color-highlight', '#bf1932'],
  ['--color-shadow', 'lightgray'],
  ['--invert-bio-highlights', 'invert(100%)'],
]

export const darkThemeVariables: ThemeCSSVariables = [
  ['--color-bg', '#0e1111'],
  ['--color-bg-blur', 'rgba(0, 0, 0, 0.8)'],
  ['--color-2', 'black'],
  ['--color-text', '#f1f1f1'],
  ['--color-icon', '#f1f1f1'],
  ['--color-highlight', '#f8db6e'],
  ['--color-shadow', 'transparent'],
  ['--invert-bio-highlights', 'invert(0%)'],
]
