export interface SocialLink {
  type: string
  url: string
}

export type CareerInterest = { title: string; subtitle: string }

export interface Education {
  almaMater: string
  color: string
  dateRange: string
  degree: string
  location: string
  major?: string
  website: string
}

export interface Skill {
  name: string
  score: number
  importance: number
}

export interface JobExperience {
  company: string
  end: string
  start: string
  role: string
  title: string
  website: string
}

export interface AboutMe {
  subtitle: string
  personalInfo: string
  education: string
  summary: string
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

export interface Project {
  id: string
  title: string
  subtitle: string
  type: string
  priority: number
  technologies: Array<string>
  links: Array<SocialLink>
  photos?: Array<string>
  video?: string
}

export interface ProjectDescription {
  id: string
  title: string
  subtitle: string
}

export interface ProjectMetadata {
  id: string
  type: string
  priority: number
  technologies: Array<string>
  links: Array<SocialLink>
  photos?: Array<string>
  video?: string
}
