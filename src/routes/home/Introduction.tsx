import PosterSection from "../../components/PosterSection"
import secBg1 from "../../assets/images/sec-bg1.jpg"
import styles from "./Introduction.module.css"
import Poster from "../../components/Poster"

type Props = {
  photos: string[]
  subtitle: string
  summary: string
}

export default function Introduction(props: Props) {
  const { photos, subtitle, summary } = props

  const randomizedPhoto: string =
    photos[Math.floor(Math.random() * photos.length)]

  return (
    <PosterSection imgSrc={secBg1}>
      <div className={styles.intro}>
        <section className={styles.photoContainer}>
          <Poster className={styles.poster} src={randomizedPhoto} />
        </section>

        <article className={styles.aboutMe}>
          <h1>{subtitle}</h1>
          <p dangerouslySetInnerHTML={{ __html: summary }}></p>
        </article>
      </div>
    </PosterSection>
  )
}
