import Poster from "../../components/Poster"
import styles from "./index.module.css"
import useFetchFromDB from "../../useFetchFromDB"
import useFetchListFromDB from "../../useFetchListFromDB"
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg"
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin2.svg"
import { ReactComponent as XingIcon } from "../../assets/icons/xing2.svg"
import PosterQuote from "./PosterQuote"
import { useContext } from "react"
import { SettingsContext } from "../../settings"
import Loader from "../../components/Loader"
import ExtendableTextContent from "../../components/ExtendableTextContent"

export default function Home() {
  const { settings } = useContext(SettingsContext)
  const aboutMe = useFetchFromDB(`${settings.lang}/me`)
  const photosData = useFetchListFromDB(`photos`)
  const socialLinksData = useFetchListFromDB(`contact/socialLinks`)

  if (aboutMe.isFetching || photosData.isFetching || socialLinksData.isFetching)
    return <Loader />

  const { subtitle, about } = aboutMe

  const photos = photosData.list
  const randomizedPhoto = photos[Math.floor(Math.random() * photos.length)]

  const socialLinks = socialLinksData.list

  return (
    <section className={styles.Home}>
      <div className={styles.photoContainer}>
        <Poster className={styles.poster} src={randomizedPhoto} />

        <div className={styles.socialLinks}>
          {socialLinks.map((link) => {
            const Icon = getIconComponentBySocialLink(link.type)
            return (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </div>

      <div className={styles.aboutMe}>
        <PosterQuote />
        <h2>{subtitle}</h2>
        <ExtendableTextContent paragraphs={about} />
      </div>
    </section>
  )
}

function getIconComponentBySocialLink(linkType) {
  switch (linkType) {
    case "github":
      return GithubIcon
    case "linkedin":
      return LinkedinIcon
    case "xing":
      return XingIcon
    default:
      return null
  }
}
