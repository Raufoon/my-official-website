export interface SocialLink {
  type: string
  url: string
}

export interface AboutMe {
  subtitle: string
  about: Array<string>
}

export interface APIResponseWithList<T> {
  isFetching: boolean
  hasError: boolean
  list: Array<T>
}

export interface APIResponse<T> {
  isFetching: boolean
  hasError: boolean
  data: T
}

export type AppTheme = 'light' | 'dark'

export type AppLang = 'en' | 'de'

export interface AppSettings {
  lang: AppLang
  theme: AppTheme
}

export type ThemeCSSVariables = Array<[string, string]>
