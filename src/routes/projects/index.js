import { useMemo, useState } from "react"
import Loader from "../../components/Loader"
import Project from "../../components/Project"
import TechLabel from "../../components/TechLabel"
import useFetchListFromDB from "../../useFetchListFromDB"
import styles from "./index.module.css"

export default function Projects() {
  const { isFetching, list } = useFetchListFromDB(`projects`)
  const [filter, setFilter] = useState(null)

  const filteredSortedProjectList = useMemo(() => {
    if (!list) return []

    const filteredList = filter
      ? list.filter((project) => project.technologies.indexOf(filter) !== -1)
      : list

    return filteredList.sort((a, b) => (a.priority > b.priority ? -1 : 1))
  }, [list, filter])

  const allTechLabelsWithCount = useMemo(() => {
    if (!list) return []

    const techs = [].concat(...list.map((list) => list.technologies))
    const countMap = {}

    techs.forEach((tech) => {
      if (countMap[tech]) countMap[tech]++
      else countMap[tech] = 1
    })

    const techsWithCount = Object.keys(countMap).map((tech) => ({
      tech,
      count: countMap[tech],
    }))
    return techsWithCount.sort((a, b) => (a.count > b.count ? -1 : 1))
  }, [list])

  if (isFetching) return <Loader center={true} />

  return (
    <section className={styles.Projects}>
      <div className={styles.techFilters}>
        <button onClick={() => setFilter(null)}>All ({list.length})</button>

        {allTechLabelsWithCount.map((item) => (
          <button
            key={item.tech}
            onClick={() => setFilter(item.tech)}
            className={filter === item.tech ? styles.active : ""}
          >
            <TechLabel type={item.tech}>
              {item.tech}({item.count})
            </TechLabel>
          </button>
        ))}
      </div>

      {filteredSortedProjectList.map((project, index) => (
        <Project
          key={project.id}
          project={project}
          invertLayout={index % 2 === 1}
        />
      ))}
    </section>
  )
}
