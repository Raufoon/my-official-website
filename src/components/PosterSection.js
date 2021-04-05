import styles from './PosterSection.module.css'

export default function PosterSection({ imgSrc, className, children }) {
  return (
    <section
      className={`${styles.PosterSection} ${className}`}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  )
}
