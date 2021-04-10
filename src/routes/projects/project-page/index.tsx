import { useRouteMatch } from 'react-router-dom'
import Loader from '../../../components/Loader'
import Project from '../../../components/project'
import useFetchFromDB from '../../../hooks/useFetchFromDB'
import styles from './index.module.css'
import { ProjectType } from '../types'

export default function ProjectPage() {
  const { params } = useRouteMatch<{ id: string }>()
  const { isFetching, hasError, data: project } = useFetchFromDB<ProjectType>(
    `projects/${params.id}`
  )

  if (isFetching) return <Loader />

  if (hasError) return <span>Failed to load</span>

  return (
    <main className={`${styles.ProjectPage} atLeastFullHeight`}>
      <Project project={project} />
    </main>
  )
}
