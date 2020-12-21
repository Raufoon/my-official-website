import { useMemo } from "react"
import Loader from "../../components/Loader"
import Project from "../../components/Project"
import TechLabel from "../../components/TechLabel"
import useFetchListFromDB from "../../useFetchListFromDB"
import styles from "./index.module.css"

export default function Projects() {
  const { isFetching, list } = useFetchListFromDB(`projects`)

  const sortedProjectList = useMemo(() => {
    if (!list) return []
    return list.sort((a, b) => (a.priority > b.priority ? -1 : 1))
  }, [list])

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
        {allTechLabelsWithCount.map((item) => (
          <TechLabel key={item.tech} type={item.tech}>
            {item.tech} ({item.count})
          </TechLabel>
        ))}
      </div>

      {sortedProjectList.map((project, index) => (
        <Project
          key={project.id}
          project={project}
          invertLayout={index % 2 === 1}
        />
      ))}
    </section>
  )
}
