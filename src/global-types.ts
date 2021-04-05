export interface SocialLink {
  type: string
  url: string
}

export interface AboutMe {
  subtitle: string
  about: Array<string>
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
