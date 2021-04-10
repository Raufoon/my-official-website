import { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './ProjectFilterPanel.module.css'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import { ProjectType } from '../../global-types'
import { getSortedLabelFreqPairs } from './utils'

interface Props {
  className: string
  projects: Array<ProjectType>
  setVisibleProjects: any
  setFilterDescription: any
}

export default function ProjectFilterPanel(props: Props) {
  const {
    className,
    projects,
    setVisibleProjects,
    setFilterDescription,
  } = props

  const allTechLabelsWithCount = useMemo(() => {
    const allTechLabels: Array<string> = projects.flatMap(
      (project) => project.technologies
    )
    return getSortedLabelFreqPairs(allTechLabels)
  }, [projects])

  const allProjectTypesWithCount = useMemo(() => {
    const allTypes = projects.map((project) => project.type)
    return getSortedLabelFreqPairs(allTypes)
  }, [projects])

  const [techFilters, setTechFilters] = useState([] as Array<string>)

  const [typeFilter, setTypeFilter] = useState('')

  useEffect(() => {
    if (!typeFilter && techFilters.length === 0) {
      setFilterDescription(null)
      return
    }
    if (techFilters.length === 0) {
      setFilterDescription(`${typeFilter} Projects`)
      return
    }
    if (!typeFilter) {
      setFilterDescription(`Projects with ${techFilters.join(' + ')}`)
      return
    }
    setFilterDescription(
      `${typeFilter} Projects with ${techFilters.join(' + ')}`
    )
  }, [setFilterDescription, techFilters, typeFilter])

  const addTechFilter = useCallback((tech) => {
    setTechFilters((state) => [...state, tech])
  }, [])

  const removeTechFilter = useCallback((tech) => {
    setTechFilters((state) => state.filter((label) => label !== tech))
  }, [])

  const clearAllFilters = useCallback(() => {
    setTechFilters([])
    setTypeFilter('')
  }, [])

  const shouldDisplayClearButton = !!typeFilter || techFilters.length > 0

  useEffect(() => {
    let filteredProjects = projects.filter((project) => {
      return techFilters.reduce(
        (result: boolean, tech: string): boolean =>
          result && project.technologies.indexOf(tech) !== -1,
        true
      )
    })

    if (typeFilter) {
      filteredProjects = filteredProjects.filter(
        (project) => project.type === typeFilter
      )
    }

    setVisibleProjects(filteredProjects)
  }, [techFilters, typeFilter, setVisibleProjects, projects])

  return (
    <div className={`${styles.ProjectFilterPanel} ${className}`}>
      <div className={styles.header}>
        <h2>Filters</h2>

        {shouldDisplayClearButton && (
          <button
            className={styles.clearFilterButton}
            onClick={clearAllFilters}
          >
            <CloseIcon />
            &nbsp;Clear Filters
          </button>
        )}
      </div>

      <div className={styles.filterList}>
        <h4>Project Types</h4>

        {allProjectTypesWithCount.map(({ label, freq }) => (
          <div key={label}>
            <input
              type="checkbox"
              checked={typeFilter === label}
              onChange={(e) =>
                e.target.checked ? setTypeFilter(label) : setTypeFilter('')
              }
            />
            &nbsp;{label} ({freq})
          </div>
        ))}
      </div>

      <div className={styles.filterList}>
        <h4>Technologies</h4>

        {allTechLabelsWithCount.map(({ label, freq }) => (
          <div key={label}>
            <input
              type="checkbox"
              checked={techFilters.indexOf(label) !== -1}
              onChange={(e) =>
                e.target.checked
                  ? addTechFilter(label)
                  : removeTechFilter(label)
              }
            />
            &nbsp;{label} ({freq})
          </div>
        ))}
      </div>
    </div>
  )
}
