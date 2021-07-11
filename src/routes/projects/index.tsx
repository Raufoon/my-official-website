import { useCallback } from "react"
import Loader from "../../components/Loader"
import styles from "./index.module.scss"
import ProjectFilterPanel from "./ProjectFilterPanel"
import { ReactComponent as FilterIcon } from "../../assets/icons/equalizer.svg"
import { createModal } from "../../components/modal"
import IconButton from "../../components/IconButton"
import useViewableProjects from "../../hooks/useViewableProjects"
import Project from "../../components/project"
import ErrorBoundary from "../../components/ErrorBoundary"

export default function Projects() {
  const { isFetching, allProjects, visibleProjects, setVisibleProjects } =
    useViewableProjects()

  const openFilterModal = useCallback(() => {
    createModal(
      <ProjectFilterPanel
        className={styles.filterPanelMobile}
        projects={allProjects}
        setVisibleProjects={setVisibleProjects}
      />
    )
  }, [allProjects, setVisibleProjects])

  if (isFetching) return <Loader center={true} />

  return (
    <main className={styles.Projects}>
      <ProjectFilterPanel
        className={styles.filterPanel}
        projects={allProjects}
        setVisibleProjects={setVisibleProjects}
      />

      <IconButton
        btnClassName={styles.filterPanelMobileOpener}
        onClick={openFilterModal}
        Icon={FilterIcon}
        iconProps={{ width: "2rem", height: "2rem" }}
        label="Filters"
      />

      <section className={styles.projectList}>
        {visibleProjects.map((project) => (
          <ErrorBoundary
            key={project.id}
            errorMsg={`Failed to display project ${project.id}`}
          >
            <Project id={project.id} />
          </ErrorBoundary>
        ))}
      </section>
    </main>
  )
}
