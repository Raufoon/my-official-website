import { createContext } from 'react'
import { getDefaultSettings } from './settings'

const settingsContext = createContext(getDefaultSettings())
export const SettingsContext = settingsContext
