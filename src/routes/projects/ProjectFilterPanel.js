import { useMemo } from 'react'
import styles from './ProjectFilterPanel.module.css'

function getSortedLabelsWithCount(labels) {
  const countMap = labels.reduce((result, current) => {
    result[current] ? result[current]++ : (result[current] = 1)
    return result
  }, {})

  return Object.keys(countMap)
    .map((key) => ({
      label: key,
      count: countMap[key],
    }))
    .sort((a, b) => (a.count > b.count ? -1 : 1))
}

export default function ProjectFilterPanel({ className, projects }) {
  const allTechLabelsWithCount = useMemo(() => {
    const allTechNames2D = projects.map((project) => project.technologies)
    const allTechLabels = [].concat(...allTechNames2D)
    return getSortedLabelsWithCount(allTechLabels)
  }, [projects])

  const allProjectTypesWithCount = useMemo(() => {
    const allTypes = projects.map((project) => {
      const projectType = project.type.replace(/-/g, ' ')
      return projectType.charAt(0).toUpperCase() + projectType.slice(1)
    })
    return getSortedLabelsWithCount(allTypes)
  }, [projects])

  return (
    <div className={`${styles.ProjectFilterPanel} ${className}`}>
      <h2>Filters</h2>

      <div className={styles.filterList}>
        <h4>Project Types</h4>
        {allProjectTypesWithCount.map(({ label, count }) => (
          <div key={label}>
            <input type="checkbox" />
            &nbsp;{label} ({count})
          </div>
        ))}
      </div>

      <div className={styles.filterList}>
        <h4>Technologies</h4>
        {allTechLabelsWithCount.map(({ label, count }) => (
          <div key={label}>
            <input type="checkbox" />
            &nbsp;{label} ({count})
          </div>
        ))}
      </div>
    </div>
  )
}
