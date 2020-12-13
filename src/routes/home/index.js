import Poster from "../../components/Poster"
import styles from "./index.module.css"

export default function Home() {
  return (
    <section className={styles.Home}>
      <div className={styles.photoContainer}>
        <Poster
          className={styles.poster}
          src="https://i.imgur.com/K9Nkdus.jpg"
        />
      </div>
      <div className={styles.aboutMe}>XXX</div>
    </section>
  )
}
