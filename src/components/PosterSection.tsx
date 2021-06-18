import styles from "./PosterSection.module.scss"

interface Props {
  imgSrc: string
  className?: string
  children: any
}

export default function PosterSection(props: Props) {
  const { imgSrc, className, children } = props

  return (
    <article
      className={`${styles.PosterSection} ${className} atLeastFullHeight`}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className={styles.inner}>{children}</div>
    </article>
  )
}
