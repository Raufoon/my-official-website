import { useCallback, useEffect, useMemo, useState } from "react"
import styles from "./ProjectFilterPanel.module.scss"
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
import { getSortedLabelFreqPairs, intersects } from "./utils"
import IconButton from "../../components/IconButton"
import { Project } from "../../global-types"

interface Props {
  className: string
  projects: Array<Project>
  setVisibleProjects: any
}

export default function ProjectFilterPanel(props: Props) {
  const { className, projects, setVisibleProjects } = props

  const [filterDescription, setFilterDescription] = useState("")

  const [techFilters, setTechFilters] = useState([] as Array<string>)
  const [typeFilter, setTypeFilter] = useState("")

  useEffect(
    function setFilterDescriptionFromFilters() {
      const title = typeFilter ? `${typeFilter} Projects` : "Projects"
      const titleWithDetails =
        techFilters && techFilters.length > 0
          ? `${title} with ${techFilters.join(" , ")}`
          : title

      setFilterDescription(
        titleWithDetails === "Projects" ? "" : titleWithDetails
      )
    },
    [setFilterDescription, techFilters, typeFilter]
  )

  useEffect(
    function applyAllFilters() {
      const filteredByType = typeFilter
        ? projects.filter((p) => p.type === typeFilter)
        : projects

      const noTechFilters = techFilters.length === 0

      const filteredByTech = noTechFilters
        ? filteredByType
        : filteredByType.filter((p) => intersects(p.technologies, techFilters))

      setVisibleProjects(filteredByTech)
    },
    [techFilters, typeFilter, setVisibleProjects, projects]
  )

  const addTechFilter = useCallback((tech) => {
    setTechFilters((state) => [...state, tech])
  }, [])

  const removeTechFilter = useCallback((tech) => {
    setTechFilters((state) => state.filter((label) => label !== tech))
  }, [])

  const clearAllFilters = useCallback(() => {
    setTechFilters([])
    setTypeFilter("")
  }, [])

  const techLabelFreqPairs = useMemo(() => {
    const techLabels = projects.flatMap((project) => project.technologies)
    return getSortedLabelFreqPairs(techLabels)
  }, [projects])

  const ptypeLabelFreqPairs = useMemo(() => {
    const types = projects.map((project) => project.type)
    return getSortedLabelFreqPairs(types)
  }, [projects])

  const shouldDisplayClearButton = !!typeFilter || techFilters.length > 0

  return (
    <section className={`${styles.ProjectFilterPanel} ${className}`}>
      <header className={styles.header}>
        <h2>Filters</h2>
        {!!filterDescription?.length && <span>{filterDescription}</span>}

        {shouldDisplayClearButton && (
          <IconButton
            btnClassName={styles.clearFilterButton}
            onClick={clearAllFilters}
            Icon={CloseIcon}
            label="Clear filters"
          />
        )}
      </header>

      <section className={styles.filterList}>
        <h4>Project Types</h4>

        {ptypeLabelFreqPairs.map(({ label, freq }) => (
          <div key={label}>
            <input
              type="checkbox"
              checked={typeFilter === label}
              onChange={(e) => setTypeFilter(e.target.checked ? label : "")}
            />
            &nbsp;{label} ({freq})
          </div>
        ))}
      </section>

      <section className={styles.filterList}>
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
      </section>
    </section>
  )
}
