import { useContext } from 'react'
import { SettingsContext } from '../settings'
import useFetchFromDB from '../useFetchFromDB'
import ProjectCard from './ProjectCard'

export default function Project({ project, invertLayout }) {
  const { id, type, photos, technologies, links, video } = project

  const { settings } = useContext(SettingsContext)

  const { isFetching, hasError, title, subtitle } = useFetchFromDB(
    `${settings.lang}/projects/${id}`
  )

  if (isFetching || hasError) return false

  return (
    <ProjectCard
      id={id}
      type={type}
      photos={photos || []}
      technologies={technologies || []}
      links={links || []}
      video={video}
      title={title}
      subtitle={subtitle}
      invertLayout={invertLayout}
    />
  )
}
