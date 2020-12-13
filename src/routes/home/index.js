import Poster from "../../components/Poster"
import styles from "./index.module.css"
import useFetchFromDB from "../../useFetchFromDB"
import useFetchListFromDB from "../../useFetchListFromDB"

export default function Home() {
  const aboutMe = useFetchFromDB(`en/me`)
  const photosData = useFetchListFromDB(`photos`)

  if (aboutMe.isFetching || photosData.isFetching) return "Loading"

  const { subtitle, about } = aboutMe

  const photos = photosData.list

  const randomizedPhoto = photos[Math.floor(Math.random() * photos.length)]

  return (
    <section className={styles.Home}>
      <div className={styles.photoContainer}>
        <Poster className={styles.poster} src={randomizedPhoto} />
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
