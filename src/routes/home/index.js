import Poster from '../../components/Poster'
import styles from './index.module.css'
import useFetchFromDB from '../../useFetchFromDB'
import useFetchListFromDB from '../../useFetchListFromDB'
import { useContext } from 'react'
import { SettingsContext } from '../../settings'
import Loader from '../../components/Loader'
import PosterSection from '../../components/PosterSection'
import secBg1 from '../../assets/images/sec-bg1.jpg'
import secBg2 from '../../assets/images/sec-bg2.jpg'
import secBg3 from '../../assets/images/sec-bg3.jpg'

export default function Home() {
  const { settings } = useContext(SettingsContext)
  const { subtitle, about, isFetching: isAboutFetching } = useFetchFromDB(
    `${settings.lang}/me`
  )
  const photosData = useFetchListFromDB(`photos`)

  if (isAboutFetching || photosData.isFetching) return <Loader />

  const photos = photosData.list
  const randomizedPhoto = photos[Math.floor(Math.random() * photos.length)]

  return (
    <div className={styles.Home}>
      <PosterSection imgSrc={secBg1}>
        <div className={styles.intro}>
          <div className={styles.photoContainer}>
            <Poster className={styles.poster} src={randomizedPhoto} />
          </div>

          <div className={styles.aboutMe}>
            <h1>{subtitle}</h1>
            <p dangerouslySetInnerHTML={{ __html: about[0] }}></p>
          </div>
        </div>
      </PosterSection>

      <PosterSection imgSrc={secBg2}>
        <h1>My academic life</h1>
        <p dangerouslySetInnerHTML={{ __html: about[1] }}></p>
      </PosterSection>

      <PosterSection imgSrc={secBg3}>
        <h1>More about me</h1>
        <p dangerouslySetInnerHTML={{ __html: about[2] }}></p>
      </PosterSection>
    </div>
  )
}
