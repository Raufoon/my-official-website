import { useContext } from "react"
import { SettingsContext } from "../../contexts"
import { AppSettings, SocialLink } from "../../global-types"
import useFetchFromDB from "../../hooks/useFetchFromDB"
import ProjectCard from "./ProjectCard"

interface Props {
  id: string
}

type ProjectDescription = {
  title: string
  subtitle: string
}

type ProjectMetadata = {
  id: string
  type: string
  priority: number
  technologies: Array<string>
  links: Array<SocialLink>
  photos?: Array<string>
  video?: string
}

export default function Project(props: Props) {
  const { id } = props

  const settings: AppSettings = useContext(SettingsContext)

  const {
    isFetching: isDescriptionFetching,
    hasError: hasDescriptionError,
    data: description,
  } = useFetchFromDB<ProjectDescription>(`${settings.lang}/projects/${id}`)

  const {
    isFetching: isMetadataFetching,
    hasError: hasMetadataError,
    data: metadata,
  } = useFetchFromDB<ProjectMetadata>(`projects/${id}`)

  if (
    isDescriptionFetching ||
    hasDescriptionError ||
    isMetadataFetching ||
    hasMetadataError
  )
    return null

  const { title, subtitle } = description
  const { type, photos, technologies, links, video, priority } = metadata

  return (
    <ProjectCard
      id={id}
      type={type}
      photos={photos || []}
      technologies={technologies || []}
      links={links || []}
      video={video}
      title={title}
      priority={priority}
      subtitle={subtitle}
    />
  )
}
