import styles from './PosterSection.module.css'

interface Props {
  imgSrc: string,
  className?: string,
  children: any
}

export default function PosterSection(props: Props) {
  const { imgSrc, className, children } = props

  return (
    <section
      className={`${styles.PosterSection} ${className}`}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  )
}
