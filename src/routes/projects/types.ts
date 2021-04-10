import { SocialLink } from '../../global-types'

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
