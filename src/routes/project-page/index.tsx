import { useContext } from "react"
import { useRouteMatch } from "react-router-dom"
import ProjectCard from "../../components/project/ProjectCard"
import { SettingsContext } from "../../contexts"
import { AppSettings, SocialLink } from "../../global-types"
import useFetchFromDB from "../../hooks/useFetchFromDB"
import styles from "./index.module.scss"

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

export default function ProjectPage() {
  const { params } = useRouteMatch<{ id: string }>()

  const { id } = params

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

  const isNotLoadedYet =
    isDescriptionFetching ||
    hasDescriptionError ||
    isMetadataFetching ||
    hasMetadataError

  if (isNotLoadedYet) return null

  const { type, photos, technologies, links, video, priority } = metadata

  const { title, subtitle } = description

  return (
    <main className={`${styles.ProjectPage} atLeastFullHeight`}>
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
    </main>
  )
}
