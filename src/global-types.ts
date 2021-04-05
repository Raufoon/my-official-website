export interface SocialLink {
  type: string
  url: string
}

export interface AboutMe {
  subtitle: string
  about: Array<string>
}

export type BusinessData = SocialLink | AboutMe | any

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
