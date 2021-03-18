import { useCallback, useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import Project from '../../components/Project'
import useFetchListFromDB from '../../useFetchListFromDB'
import styles from './index.module.css'
import ProjectFilterPanel from './ProjectFilterPanel'
import { ReactComponent as FilterIcon } from '../../assets/icons/equalizer.svg'
import { createModal } from '../../components/modal'

export default function Projects() {
  const { isFetching, list } = useFetchListFromDB(`projects`)

  const [visibleProjects, setVisibleProjects] = useState([])

  const [filterDescription, setFilterDescription] = useState(null)

  useEffect(() => {
    list &&
      setVisibleProjects(
        list.sort((a, b) => (a.priority > b.priority ? -1 : 1))
      )
  }, [list])

  const openFilterModal = useCallback(() => {
    createModal(
      <ProjectFilterPanel
        className={styles.filterPanelMobile}
        setFilterDescription={setFilterDescription}
        projects={list}
        setVisibleProjects={setVisibleProjects}
      />
    )
  }, [list])

  if (isFetching) return <Loader center={true} />

  return (
    <section className={styles.Projects}>
      <ProjectFilterPanel
        className={styles.filterPanel}
        projects={list}
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
