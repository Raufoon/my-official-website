import { Project as ProjectType } from "../../global-types"
import ProjectCard from "./ProjectCard"

interface Props {
  project: ProjectType
}

export default function Project(props: Props) {
  const { project } = props

  const {
    id,
    title,
    subtitle,
    type,
    photos,
    technologies,
    links,
    video,
    priority,
  } = project

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
