import { useContext } from 'react'
import { SettingsContext } from '../../contexts'
import { AppSettings } from '../../global-types'
import useFetchFromDB from '../../hooks/useFetchFromDB'
import ProjectCard from './ProjectCard'
import { ProjectType } from './types'

interface Props {
  project: ProjectType
  invertLayout?: boolean
}

export default function Project(props: Props) {
  const { project, invertLayout } = props

  const { id, type, photos, technologies, links, video, priority } = project

  const settings: AppSettings = useContext(SettingsContext)

  const { isFetching, hasError, data } = useFetchFromDB<{
    title: string
    subtitle: string
  }>(`${settings.lang}/projects/${id}`)

  if (isFetching || hasError) return <></>

  const { title, subtitle } = data

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
      invertLayout={invertLayout}
    />
  )
}
