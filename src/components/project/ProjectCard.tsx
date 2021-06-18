import { useMemo } from "react"
import { Link } from "react-router-dom"
import { ProjectVisualType } from "../../global-types"
import PhotoSlider from "../PhotoSlider"
import VideoPoster from "../VideoPoster"
import styles from "./ProjectCard.module.css"
import ProjectLinkIcon from "./ProjectLinkIcon"
import TechLabel from "./TechLabel"

export default function ProjectCard(props: ProjectVisualType) {
  const {
    id,
    title,
    subtitle,
    type,
    invertLayout,
    photos,
    technologies,
    links,
    video,
  } = props

  const projectTypeLabelStyle = useMemo(
    () => ({
      color: getProjectThemeColor(type),
    }),
    [type]
  )

  return (
    <section
      className={`${styles.Project} ${invertLayout ? styles.inverted : ""}`}
    >
      <div className={styles.monolith} style={projectTypeLabelStyle}>
        <h3 data-testid="project-type">{type}</h3>
      </div>

      <article className={styles.details}>
        <h2 data-testid="project-title">{title}</h2>
        <p data-testid="project-subtitle">{subtitle}</p>

        <div className={styles.technologies} data-testid="project-techs">
          {technologies.map((tech) => (
            <TechLabel key={tech} type={tech} />
          ))}
        </div>

        <div className={styles.links} data-testid="project-links">
          {links.map((link) => {
            const showLabel =
              !link.type.includes("download") && !link.type.includes("docker")

            return (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <ProjectLinkIcon type={link.type} />
                {showLabel && <>&nbsp;&nbsp;{link.type}</>}
              </a>
            )
          })}
          <Link to={`/projects/${id}`}>more</Link>
        </div>
      </article>

      {video ? (
        <VideoPoster
          data-testid="project-video"
          className={styles.photoSlider}
          src={video}
        />
      ) : (
        <PhotoSlider
          className={styles.photoSlider}
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

    case "Research and Development":
      return "#003366"

    default:
      return "var(--color-bg-2)"
  }
}
