import Loader from "../../components/Loader"
import styles from "./index.module.scss"
import ProjectFilterPanel from "./ProjectFilterPanel"
import Project from "../../components/project"
import ErrorBoundary from "../../components/ErrorBoundary"
import useFetchListFromDB from "../../hooks/useFetchListFromDB"

export default function Projects() {
  const { isFetching: isIdsFetching, list: projectIds } =
    useFetchListFromDB<string>(`project-ids`)

  if (isIdsFetching) return <Loader center={true} />

  return (
    <main className={styles.Projects}>
      <ProjectFilterPanel className={styles.filterPanel} />

      <section className={styles.projectList}>
        {projectIds.map((projectId) => (
          <ErrorBoundary
            key={projectId}
            errorMsg={`Failed to display project ${projectId}`}
          >
            <Project id={projectId} />
          </ErrorBoundary>
        ))}
      </section>
    </main>
  )
}
