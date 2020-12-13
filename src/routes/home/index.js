import Poster from "../../components/Poster"
import styles from "./index.module.css"
import useDataFromDB from "../../useDataFromDB"

export default function Home() {
  const { isFetching, hasError, subtitle, about, photos } = useDataFromDB(
    `en/me`
  )
  if (isFetching) return "Loading..."
  return (
    <section className={styles.Home}>
      <div className={styles.photoContainer}>
        <Poster
          className={styles.poster}
          src={photos[Math.floor(Math.random() * photos.length)]}
        />
      </div>
      <div className={styles.aboutMe}>
        <h2>{subtitle}</h2>

        {about.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </section>
  )
}
