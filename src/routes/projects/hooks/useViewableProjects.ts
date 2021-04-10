import { useEffect, useState } from 'react'
import useFetchListFromDB from '../../../hooks/useFetchListFromDB'
import { ProjectType } from '../types'
import { compareProjectsByPriority } from '../utils'

export default function useViewableProjects() {
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

  return {
    isFetching,
    allProjects: projects,
    visibleProjects,
    filterDescription,
    setFilterDescription,
    setVisibleProjects,
  }
}
