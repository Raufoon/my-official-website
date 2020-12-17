import { useContext, useMemo } from "react"
import { SettingsContext } from "../settings"
import useFetchFromDB from "../useFetchFromDB"
import PhotoSlider from "./PhotoSlider"
import styles from "./Project.module.css"
import ProjectLinkIcon from "./ProjectLinkIcon"

export default function Project({ project }) {
  const { id, type, photos, technologies, links } = project

  const typeString = useMemo(() => {
    return type.replace(/-/g, " ")
  }, [type])

  const { settings } = useContext(SettingsContext)

  const { isFetching, hasError, title, subtitle } = useFetchFromDB(
    `${settings.lang}/myprojects/${id}`
  )

  if (isFetching || hasError) return false

  return (
    <section className={styles.Project}>
      <h3 className={styles.monolith}>{typeString}</h3>

      <div className={styles.details}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className={styles.technologies}>
          {technologies.map((tech) => (
            <label key={tech}>#{tech}</label>
          ))}
        </div>
        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.type} href={link.url}>
              <ProjectLinkIcon type={link.type} />
            </a>
          ))}
        </div>
      </div>

      <PhotoSlider
        className={styles.photoSlider}
        photos={photos}
        frameColor={"#407294"}
      />
    </section>
  )
}
