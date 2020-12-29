import { useMemo, useState } from 'react'
import Loader from '../../components/Loader'
import Project from '../../components/Project'
import TechLabel from '../../components/TechLabel'
import useFetchListFromDB from '../../useFetchListFromDB'
import styles from './index.module.css'
import ProjectFilterPanel from './ProjectFilterPanel'

export default function Projects() {
  const { isFetching, list } = useFetchListFromDB(`projects`)

  const filteredSortedProjectList = useMemo(() => {
    if (!list) return []
    const filteredList = list
    return filteredList.sort((a, b) => (a.priority > b.priority ? -1 : 1))
  }, [list])

  if (isFetching) return <Loader center={true} />

  return (
    <section className={styles.Projects}>
      <ProjectFilterPanel className={styles.techFilters} projects={list} />

      <div className={styles.projectList}>
        {filteredSortedProjectList.map((project, index) => (
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
