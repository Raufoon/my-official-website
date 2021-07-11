import { useCallback, useEffect, useState } from "react"
import styles from "./ProjectFilterPanel.module.scss"
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
// import { intersects } from "./utils"
import IconButton from "../../components/IconButton"

interface Props {
  className: string
}

type ProjectFilterMetadata = {
  id: string
  type: string
  technologies: Array<string>
}

export default function ProjectFilterPanel(props: Props) {
  const { className } = props

  const [projectFilterMetadata, setProjectFilterMetadata] = useState(
    [] as ProjectFilterMetadata[]
  )

  const [typeCountMap, setTypeCountMap] = useState(new Map<string, number>())
  const [availableTypes, setAvailableTypes] = useState([] as string[])

  const [techCountMap, setTechCountMap] = useState(new Map<string, number>())
  const [availableTechs, setAvailableTechs] = useState([] as string[])

  const [filterDescription, setFilterDescription] = useState("")

  const [techFilters, setTechFilters] = useState([] as Array<string>)
  const [typeFilter, setTypeFilter] = useState("" as string)

  useEffect(function onNewProjectLoaded() {
    function onAddNewProject(event: CustomEvent) {
      const { type, technologies }: ProjectFilterMetadata = event.detail

      setProjectFilterMetadata((prev) => [...prev, event.detail])

      setAvailableTypes((prev) => {
        setTypeCountMap((oldMap) => {
          const map = new Map(oldMap)
          const freq = map.get(type)
          if (freq) map.set(type, freq + 1)
          else map.set(type, 1)
          return map
        })

        return prev.includes(type) ? prev : [...prev, type]
      })

      setAvailableTechs((prev) => {
        const techsNow = Array.from(new Set([...prev, ...technologies]))

        setTechCountMap((oldMap) => {
          const map = new Map(oldMap)

          technologies.forEach((tech) => {
            const freq = map.get(tech)
            if (freq) map.set(tech, freq + 1)
            else map.set(tech, 1)
          })

          return map
        })

        return techsNow
      })
    }

    window.addEventListener(
      "new-project-loaded",
      onAddNewProject as EventListener
    )

    return () => {
      window.removeEventListener(
        "new-project-loaded",
        onAddNewProject as EventListener
      )
    }
  }, [])

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

  // useEffect(
  //   function applyAllFilters() {
  //     const filteredByType = typeFilter
  //       ? projectFilterMetadata.filter((p) => p.type === typeFilter)
  //       : projectFilterMetadata

  //     const noTechFilters = techFilters.length === 0

  //     const filteredByTech = noTechFilters
  //       ? filteredByType
  //       : filteredByType.filter((p) => intersects(p.technologies, techFilters))

  //     // setVisibleProjectIds(filteredByTech.map((item) => item.id))
  //   },
  //   [techFilters, typeFilter, setVisibleProjectIds, projectFilterMetadata]
  // )

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

        {availableTypes.map((type) => (
          <div key={type}>
            <input
              type="checkbox"
              checked={typeFilter === type}
              onChange={(e) => setTypeFilter(e.target.checked ? type : "")}
            />
            &nbsp;{type} ({typeCountMap.get(type)})
          </div>
        ))}
      </section>

      <section className={styles.filterList}>
        <h4>Technologies</h4>

        {availableTechs.map((tech) => (
          <div key={tech}>
            <input
              type="checkbox"
              checked={techFilters.indexOf(tech) !== -1}
              onChange={(e) =>
                e.target.checked ? addTechFilter(tech) : removeTechFilter(tech)
              }
            />
            &nbsp;{tech} ({techCountMap.get(tech)})
          </div>
        ))}
      </section>
    </section>
  )
}
