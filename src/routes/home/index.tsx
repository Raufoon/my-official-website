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

  const {
    data: aboutMe,
    isFetching: isAboutFetching,
  } = useFetchFromDB<AboutMe>(`${settings.lang}/me`)

  const {
    list: photos,
    isFetching: isPhotosFetching,
  } = useFetchListFromDB<string>(`photos`)

  if (isAboutFetching || isPhotosFetching) return <Loader />

  const { subtitle, personalInfo, education, summary }: AboutMe = aboutMe
  const randomizedPhoto: string =
    photos[Math.floor(Math.random() * photos.length)]

  return (
    <main className={styles.Home}>
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

      <PosterSection imgSrc={secBg2}>
        <h1>My academic life</h1>
        <p className="tac" dangerouslySetInnerHTML={{ __html: education }}></p>
      </PosterSection>

      <PosterSection imgSrc={secBg3}>
        <h1>More about me</h1>
        <p
          className="tac"
          dangerouslySetInnerHTML={{ __html: personalInfo }}
        ></p>
      </PosterSection>
    </main>
  )
}
