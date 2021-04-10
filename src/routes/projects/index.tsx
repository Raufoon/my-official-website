import { useCallback, useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import Project from '../../components/Project'
import useFetchListFromDB from '../../hooks/useFetchListFromDB'
import styles from './index.module.css'
import ProjectFilterPanel from './ProjectFilterPanel'
import { ReactComponent as FilterIcon } from '../../assets/icons/equalizer.svg'
import { createModal } from '../../components/modal'
import { ProjectType } from '../../global-types'
import { compareProjectsByPriority } from './utils'
import IconButton from '../../components/IconButton'

export default function Projects() {
  const { isFetching, list: projects } = useFetchListFromDB<ProjectType>(
    `projects`
  )

  const [visibleProjects, setVisibleProjects] = useState(
    [] as Array<ProjectType>
  )

  const [filterDescription, setFilterDescription] = useState('')

  useEffect(
    function onProjectsFetched() {
      if (projects) {
        const sortedProjects = projects.sort(compareProjectsByPriority)
        setVisibleProjects(sortedProjects)
      }
    },
    [projects]
  )

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
    <div className={styles.Projects}>
      <ProjectFilterPanel
        className={styles.filterPanel}
        projects={projects}
        setVisibleProjects={setVisibleProjects}
        setFilterDescription={setFilterDescription}
      />

      <IconButton
        btnClassName={styles.filterPanelMobileOpener}
        onClick={openFilterModal}
        Icon={FilterIcon}
        iconProps={{ width: '2rem', height: '2rem' }}
        label="Filters"
      />

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
    </div>
  )
}
