import { useCallback, useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import Project from '../../components/Project'
import useFetchListFromDB from '../../hooks/useFetchListFromDB'
import styles from './index.module.css'
import ProjectFilterPanel from './ProjectFilterPanel'
import { ReactComponent as FilterIcon } from '../../assets/icons/equalizer.svg'
import { createModal } from '../../components/modal'
import { ProjectType } from '../../global-types'

export default function Projects() {
  const { isFetching, list: projects } = useFetchListFromDB<ProjectType>(`projects`)

  const [visibleProjects, setVisibleProjects] = useState([] as Array<ProjectType>)

  const [filterDescription, setFilterDescription] = useState(null)

  useEffect(() => {
    if (projects) {
      const sortedProjects = projects.sort((a, b) => (a.priority > b.priority ? -1 : 1))
      setVisibleProjects(sortedProjects)
    }      
  }, [projects])

  const openFilterModal = useCallback(() => {
    createModal(
      <ProjectFilterPanel
        className={styles.filterPanelMobile}
        setFilterDescription={setFilterDescription}
        projects={projects}
        setVisibleProjects={setVisibleProjects}
      />
    )
  }, [projects])

  if (isFetching) return <Loader center={true} />

  return (
    <section className={styles.Projects}>
      <ProjectFilterPanel
        className={styles.filterPanel}
        projects={projects}
        setVisibleProjects={setVisibleProjects}
        setFilterDescription={setFilterDescription}
      />
      <button
        className={styles.filterPanelMobileOpener}
        onClick={openFilterModal}
      >
        <FilterIcon width="2rem" height="2rem" />
        &nbsp;&nbsp;Filters
      </button>

      <div className={styles.projectList}>
        {filterDescription && (
          <h1 className={styles.filterDesc}>{filterDescription}</h1>
        )}

        {visibleProjects.map((project, index) => (
          <Project
            key={project.id}
            project={project}
            invertLayout={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}
