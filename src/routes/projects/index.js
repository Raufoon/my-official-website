import Loader from "../../components/Loader"
import Project from "../../components/Project"
import useFetchListFromDB from "../../useFetchListFromDB"
import styles from "./index.module.css"

export default function Projects() {
  const { isFetching, list } = useFetchListFromDB(`myprojects`)

  if (isFetching) return <Loader center={true} />

  return (
    <section className={styles.Projects}>
      {list.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  )
}
