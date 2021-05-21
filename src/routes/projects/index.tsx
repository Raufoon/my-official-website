import { useCallback } from "react"
import Loader from "../../components/Loader"
import styles from "./index.module.css"
import ProjectFilterPanel from "./ProjectFilterPanel"
import { ReactComponent as FilterIcon } from "../../assets/icons/equalizer.svg"
import { createModal } from "../../components/modal"
import IconButton from "../../components/IconButton"
import useViewableProjects from "../../hooks/useViewableProjects"
import Project from "../../components/project"
import ErrorBoundary from "../../components/ErrorBoundary"

export default function Projects() {
  const {
    isFetching,
    allProjects,
    visibleProjects,
    filterDescription,
    setVisibleProjects,
    setFilterDescription,
  } = useViewableProjects()

  const openFilterModal = useCallback(() => {
    createModal(
      <ProjectFilterPanel
        className={styles.filterPanelMobile}
        setFilterDescription={setFilterDescription}
        projects={allProjects}
        setVisibleProjects={setVisibleProjects}
      />
    )
  }, [allProjects, setVisibleProjects, setFilterDescription])

  if (isFetching) return <Loader center={true} />

  return (
    <main className={styles.Projects}>
      <ProjectFilterPanel
        className={styles.filterPanel}
        projects={allProjects}
        setVisibleProjects={setVisibleProjects}
        setFilterDescription={setFilterDescription}
      />

      <IconButton
        btnClassName={styles.filterPanelMobileOpener}
        onClick={openFilterModal}
        Icon={FilterIcon}
        iconProps={{ width: "2rem", height: "2rem" }}
        label="Filters"
      />

      <section className={styles.projectList}>
        {filterDescription && (
          <h3 className={styles.filterDesc}>{filterDescription}</h3>
        )}
        {visibleProjects.map((project, index) => (
          <ErrorBoundary
            key={project.id}
            errorMsg={`Failed to display project ${project.id}`}
          >
            <Project project={project} invertLayout={index % 2 === 1} />
          </ErrorBoundary>
        ))}
      </section>
    </main>
  )
}
