import Poster from '../../components/Poster'
import styles from './index.module.css'
import useFetchFromDB from '../../useFetchFromDB'
import useFetchListFromDB from '../../useFetchListFromDB'
import { useContext } from 'react'
import { SettingsContext } from '../../settings'
import Loader from '../../components/Loader'

export default function Home() {
  const { settings } = useContext(SettingsContext)
  const aboutMe = useFetchFromDB(`${settings.lang}/me`)
  const photosData = useFetchListFromDB(`photos`)

  if (aboutMe.isFetching || photosData.isFetching) return <Loader />

  const { subtitle, about } = aboutMe

  const photos = photosData.list
  const randomizedPhoto = photos[Math.floor(Math.random() * photos.length)]

  return (
    <section className={styles.Home}>
      <div className={styles.photoContainer}>
        <Poster className={styles.poster} src={randomizedPhoto} />
      </div>

      <div className={styles.aboutMe}>
        <h1>{subtitle}</h1>
        {about.map((para, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: para }}></p>
        ))}
      </div>
    </section>
  )
}
