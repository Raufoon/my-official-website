import { useMemo } from "react"
import { Link } from "react-router-dom"
import { Project } from "../../global-types"
import { lightColor } from "../../utils"
import PhotoSlider from "../PhotoSlider"
import VideoPoster from "../VideoPoster"
import styles from "./ProjectCard.module.scss"
import ProjectLinkIcon from "./ProjectLinkIcon"

export default function ProjectCard(props: Project) {
  const { id, title, subtitle, type, photos, technologies, links, video } =
    props

  const projectTypeLabelStyle = useMemo(
    () => ({
      color: getProjectThemeColor(type),
    }),
    [type]
  )

  return (
    <section className={`${styles.Project}`}>
      <div className={styles.monolith} style={projectTypeLabelStyle}>
        <h3 data-testid="project-type">{type}</h3>
      </div>

      <article className={styles.details}>
        <h2 data-testid="project-title">{title}</h2>
        <p data-testid="project-subtitle">{subtitle}</p>

        <div className={styles.technologies} data-testid="project-techs">
          {technologies.map((tech) => (
            <label key={tech} style={{ color: lightColor() }}>
              {tech}
            </label>
          ))}
        </div>

        <div className={styles.links} data-testid="project-links">
          {links.map((link) => (
            <a key={link.type} href={link.url} target="_blank" rel="noreferrer">
              <ProjectLinkIcon type={link.type} />
            </a>
          ))}

          <Link to={`/projects/${id}`}>more</Link>
        </div>
      </article>

      {video ? (
        <VideoPoster
          data-testid="project-video"
          className={styles.demoView}
          src={video}
        />
      ) : (
        <PhotoSlider
          className={styles.demoView}
          frameColor={"lightgray"}
          photos={photos || []}
          data-testid="project-photos"
        />
      )}
    </section>
  )
}

function getProjectThemeColor(projectType: string) {
  switch (projectType) {
    case "Frontend Web":
      return "#3b9ed6"

    case "Desktop App":
      return "#cc6540"

    case "Desktop Game":
      return "#f6546a"

    case "Full Stack Web":
      return "#6f549a"

    case "Assembly":
      return "#ff6367"

    case "R & D":
      return "#003366"

    default:
      return "var(--color-bg-2)"
  }
}
