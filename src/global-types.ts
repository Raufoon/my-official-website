export interface SocialLink {
  type: string
  url: string
}

export type CareerInterests = Array<{ title: string; subtitle: string }>

export interface Education {
  almaMater: string
  color: string
  dateRange: string
  degree: string
  location: string
  major?: string
}

export interface AboutMe {
  subtitle: string
  personalInfo: string
  education: string
  summary: string
  careerInterests: CareerInterests
  educationHistory: Array<Education>
}

interface APIResponseAbstract {
  isFetching: boolean
  hasError: boolean
}

export interface APIResponseWithList<T> extends APIResponseAbstract {
  list: Array<T>
}

export interface APIResponse<T> extends APIResponseAbstract {
  data: T
}

export type AppTheme = "light" | "dark"

export type AppLang = "en" | "de"

export interface AppSettings {
  lang: AppLang
  theme: AppTheme
}

export interface ProjectType {
  id: string
  type: string
  priority: number
  technologies: Array<string>
  links: Array<SocialLink>
  photos?: Array<string>
  video?: string
}

export interface ProjectVisualType extends ProjectType {
  title: string
  subtitle: string
  invertLayout?: boolean
}
