import { useRouteMatch } from "react-router-dom"
import Project from "../../components/project"
import styles from "./index.module.scss"

export default function ProjectPage() {
  const { params } = useRouteMatch<{ id: string }>()

  return (
    <main className={`${styles.ProjectPage} atLeastFullHeight`}>
      <Project id={params.id} />
    </main>
  )
}
