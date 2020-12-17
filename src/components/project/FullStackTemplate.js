import PhotoSlider from "../PhotoSlider"
import styles from "./FullStackTemplate.module.css"
import ProjectLinkIcon from "./ProjectLinkIcon"

export default function FullStackTemplate(props) {
  const {
    className,
    type,
    title,
    subtitle,
    desktopImages,
    mobileImages,
    links,
    technologies,
  } = props

  return (
    <section className={`${styles.FullStackTemplate} ${className}`}>
      <div className={styles.monolith}>
        <h3>{type}</h3>
      </div>

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
            <a key={link.type} href={link.url} target="_blank" rel="noreferrer">
              <ProjectLinkIcon type={link.type} />
            </a>
          ))}
        </div>
      </div>

      <PhotoSlider
        className={styles.desktopImageSlider}
        photos={desktopImages}
        frameColor={"#065"}
      />

      <PhotoSlider
        frameColor={"#669"}
        className={styles.mobileImageSlider}
        photos={mobileImages}
      />
    </section>
  )
}
