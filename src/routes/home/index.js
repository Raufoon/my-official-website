import Poster from "../../components/Poster"
import styles from "./index.module.css"
import useDataFromDB from "../../useDataFromDB"

export default function Home() {
  const { isFetching, hasError, subtitle, about, photos } = useDataFromDB(
    `en/me`
  )
  return (
    <section className={styles.Home}>
      <div className={styles.photoContainer}>
        <Poster
          className={styles.poster}
          src="https://i.imgur.com/K9Nkdus.jpg"
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
