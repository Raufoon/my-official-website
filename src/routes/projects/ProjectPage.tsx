import { useRouteMatch } from 'react-router-dom'
import Loader from '../../components/Loader'
import Project from '../../components/Project'
import { ProjectType } from '../../global-types'
import useFetchFromDB from '../../hooks/useFetchFromDB'
import styles from './ProjectPage.module.css'

export default function ProjectPage() {
  const { params } = useRouteMatch<{ id: string }>()
  const { isFetching, hasError, data: project } = useFetchFromDB<ProjectType>(
    `projects/${params.id}`
  )

  if (isFetching) return <Loader />

  if (hasError) return <span>Failed to load</span>

  return (
    <section className={styles.ProjectPage}>
      <Project project={project} />
    </section>
  )
}
