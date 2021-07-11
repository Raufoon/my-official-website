import { useContext } from "react"
import { useRouteMatch } from "react-router-dom"
import ProjectCard from "../../components/project/ProjectCard"
import { SettingsContext } from "../../contexts"
import {
  AppSettings,
  ProjectMetadata,
  ProjectDescription,
} from "../../global-types"
import useFetchFromDB from "../../hooks/useFetchFromDB"
import styles from "./index.module.scss"

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
