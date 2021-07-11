import { useCallback, useEffect, useState } from "react"
import styles from "./ProjectFilterPanel.module.scss"
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
import IconButton from "../../components/IconButton"

interface Props {
  className: string
  availableTypes: string[]
  typeFrequencies: Map<string, number>
  availableTechs: string[]
  techFrequencies: Map<string, number>
  filter: Function
}

export default function ProjectFilterPanel(props: Props) {
  const {
    className,
    availableTypes,
    typeFrequencies,
    availableTechs,
    techFrequencies,
    filter,
  } = props

  const [filterDescription, setFilterDescription] = useState("")

  const [techFilters, setTechFilters] = useState([] as Array<string>)
  const [typeFilter, setTypeFilter] = useState("" as string)

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
      filter(typeFilter, techFilters)
    },
    [filter, techFilters, typeFilter]
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

        {availableTypes.sort().map((type) => (
          <div key={type}>
            <input
              type="checkbox"
              checked={typeFilter === type}
              onChange={(e) => setTypeFilter(e.target.checked ? type : "")}
            />
            &nbsp;{type} ({typeFrequencies.get(type)})
          </div>
        ))}
      </section>

      <section className={styles.filterList}>
        <h4>Technologies</h4>

        {availableTechs.sort().map((tech) => (
          <div key={tech}>
            <input
              type="checkbox"
              checked={techFilters.indexOf(tech) !== -1}
              onChange={(e) =>
                e.target.checked ? addTechFilter(tech) : removeTechFilter(tech)
              }
            />
            &nbsp;{tech} ({techFrequencies.get(tech)})
          </div>
        ))}
      </section>
    </section>
  )
}
