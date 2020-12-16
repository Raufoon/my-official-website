import Loader from "../../components/Loader"
import Project from "../../components/Project"
import useFetchListFromDB from "../../useFetchListFromDB"

export default function Projects() {
  const { isFetching, hasError, list } = useFetchListFromDB(`myprojects`)

  if (isFetching) return <Loader center={true} />

  return (
    <section className={styleMedia.Projects}>
      {list.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  )
}
