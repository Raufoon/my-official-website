import { useRouteMatch } from 'react-router-dom'
import Loader from '../../components/Loader'
import Project from '../../components/Project'
import useFetchFromDB from '../../useFetchFromDB'
import styles from './ProjectPage.module.css'

export default function ProjectPage() {
  const { params } = useRouteMatch()
  const { isFetching, hasError, ...project } = useFetchFromDB(
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
