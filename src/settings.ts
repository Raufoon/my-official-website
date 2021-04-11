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
  ['--color-bg-blur', 'rgba(245, 245, 245, 1)'],
  ['--color-bg-1', '#f5f5f5'],
  ['--color-bg-2', '#fff'],
  ['--color-bg-3', '#ccdcda'],
  ['--color-bg-4', '#dee4e4'],
  ['--color-text', '#0e1111'],
  ['--color-icon', '#0e1111'],
  ['--color-highlight', '#bf1932'],
  ['--invert-bio-highlights', 'invert(100%)'],
]

export const darkThemeVariables: ThemeCSSVariables = [
  ['--color-bg-blur', 'rgba(0, 0, 0, 0.8)'],
  ['--color-bg-1', '#0e1111'],
  ['--color-bg-2', 'black'],
  ['--color-bg-3', '#00100e'],
  ['--color-bg-4', '#121818'],
  ['--color-text', '#f1f1f1'],
  ['--color-icon', '#f1f1f1'],
  ['--color-highlight', '#f8db6e'],
  ['--invert-bio-highlights', 'invert(0%)'],
]
