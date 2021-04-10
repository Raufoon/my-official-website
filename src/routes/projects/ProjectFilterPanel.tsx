import { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './ProjectFilterPanel.module.css'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import { getSortedLabelFreqPairs } from './utils'
import { ProjectType } from './types'
import IconButton from '../../components/IconButton'

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

  const techLabelFreqPairs = useMemo(() => {
    const techLabels: Array<string> = projects.flatMap(
      (project) => project.technologies
    )
    return getSortedLabelFreqPairs(techLabels)
  }, [projects])

  const ptypeLabelFreqPairs = useMemo(() => {
    const types = projects.map((project) => project.type)
    return getSortedLabelFreqPairs(types)
  }, [projects])

  const [techFilters, setTechFilters] = useState([] as Array<string>)

  const [typeFilter, setTypeFilter] = useState('')

  useEffect(
    function setFilterDescFromFilters() {
      let desc = ''

      if (typeFilter) {
        desc = `${typeFilter} Projects`
      }
      if (techFilters && techFilters.length > 0) {
        desc = `${desc || 'Projects'} with ${techFilters.join(' + ')}`
      }

      setFilterDescription(desc)
    },
    [setFilterDescription, techFilters, typeFilter]
  )

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

  useEffect(
    function applyAllFilters() {
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
    },
    [techFilters, typeFilter, setVisibleProjects, projects]
  )

  return (
    <div className={`${styles.ProjectFilterPanel} ${className}`}>
      <div className={styles.header}>
        <h2>Filters</h2>

        {shouldDisplayClearButton && (
          <IconButton
            btnClassName={styles.clearFilterButton}
            onClick={clearAllFilters}
            Icon={CloseIcon}
            label="Clear filters"
          />
        )}
      </div>

      <div className={styles.filterList}>
        <h4>Project Types</h4>

        {ptypeLabelFreqPairs.map(({ label, freq }) => (
          <div key={label}>
            <input
              type="checkbox"
              checked={typeFilter === label}
              onChange={(e) => setTypeFilter(e.target.checked ? label : '')}
            />
            &nbsp;{label} ({freq})
          </div>
        ))}
      </div>

      <div className={styles.filterList}>
        <h4>Technologies</h4>

        {techLabelFreqPairs.map(({ label, freq }) => (
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
