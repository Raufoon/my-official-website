import Loader from "../../components/Loader"
import styles from "./index.module.scss"
import ProjectFilterPanel from "./ProjectFilterPanel"
import Project from "../../components/project"
import ErrorBoundary from "../../components/ErrorBoundary"
import useProjects from "../../hooks/useProjects"

export default function Projects() {
  const {
    isFetching,
    hasError,
    projects,
    availableTypes,
    typeFrequencies,
    availableTechs,
    techFrequencies,
  } = useProjects()

  if (isFetching || hasError) return <Loader center={true} />

  return (
    <main className={styles.Projects}>
      <ProjectFilterPanel
        className={styles.filterPanel}
        availableTypes={availableTypes}
        typeFrequencies={typeFrequencies}
        availableTechs={availableTechs}
        techFrequencies={techFrequencies}
      />

      <section className={styles.projectList}>
        {projects.map((project) => (
          <ErrorBoundary
            key={project.id}
            errorMsg={`Failed to display project ${project.id}`}
          >
            <Project project={project} />
          </ErrorBoundary>
        ))}
      </section>
    </main>
  )
}
