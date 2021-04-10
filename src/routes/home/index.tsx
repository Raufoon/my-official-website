import Poster from '../../components/Poster'
import styles from './index.module.css'
import useFetchFromDB from '../../hooks/useFetchFromDB'
import useFetchListFromDB from '../../hooks/useFetchListFromDB'
import { useContext } from 'react'
import { SettingsContext } from '../../contexts'
import Loader from '../../components/Loader'
import PosterSection from '../../components/PosterSection'
import secBg1 from '../../assets/images/sec-bg1.jpg'
import secBg2 from '../../assets/images/sec-bg2.jpg'
import secBg3 from '../../assets/images/sec-bg3.jpg'
import { AboutMe, AppSettings } from '../../global-types'

export default function Home() {
  const settings: AppSettings = useContext(SettingsContext)
  
  const { data: aboutMe, isFetching: isAboutFetching } = useFetchFromDB<AboutMe>(
    `${settings.lang}/me`
  )
  
  const { list: photos, isFetching: isPhotosFetching} = useFetchListFromDB<string>(`photos`)
  
  if (isAboutFetching || isPhotosFetching) return <Loader />
  
  const { subtitle, about }: AboutMe = aboutMe
  const randomizedPhoto: string = photos[Math.floor(Math.random() * photos.length)]

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
        <p className="tac" dangerouslySetInnerHTML={{ __html: about[1] }}></p>
      </PosterSection>

      <PosterSection imgSrc={secBg3}>
        <h1>More about me</h1>
        <p className="tac" dangerouslySetInnerHTML={{ __html: about[2] }}></p>
      </PosterSection>
    </div>
  )
}
