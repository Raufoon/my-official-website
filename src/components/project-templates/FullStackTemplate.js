import PhotoSlider from "../PhotoSlider"
import styles from "./FullStackTemplate.module.css"

export default function FullStackTemplate(props) {
  const {
    className,
    type,
    title,
    subtitle,
    desktopImages,
    mobileImages,
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
      </div>
      <PhotoSlider
        className={styles.desktopImageSlider}
        photos={desktopImages}
      />
      <PhotoSlider className={styles.mobileImageSlider} photos={mobileImages} />
    </section>
  )
}
