import { useMemo } from "react"
import Loader from "../../components/Loader"
import Project from "../../components/Project"
import useFetchListFromDB from "../../useFetchListFromDB"
import styles from "./index.module.css"

const themes = ["#407294", "#daa520"]

export default function Projects() {
  const { isFetching, list } = useFetchListFromDB(`myprojects`)

  const sortedProjectList = useMemo(() => {
    if (!list) return []
    return list.sort((a, b) => (a.priority > b.priority ? -1 : 1))
  }, [list])

  if (isFetching) return <Loader center={true} />

  return (
    <section className={styles.Projects}>
      {sortedProjectList.map((project, index) => (
        <Project key={project.id} project={project} theme={themes[index]} />
      ))}
    </section>
  )
}
