import { Link } from 'react-router-dom'
import useFetchListFromDB from '../useFetchListFromDB'
import styles from './Footer.module.css'
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg'
import { ReactComponent as LinkedinIcon } from '../assets/icons/linkedin2.svg'
import { ReactComponent as XingIcon } from '../assets/icons/xing2.svg'
import { ReactComponent as EmailIcon } from '../assets/icons/envelop.svg'
import { ReactComponent as PhoneIcon } from '../assets/icons/phone.svg'

export default function Footer() {
  const { isFetching, list } = useFetchListFromDB(`contact/socialLinks`)

  if (isFetching) return false

  return (
    <footer className={styles.Footer}>
      <div className={styles.section}>
        <h3 className={styles.headline}>Sitemap</h3>
        <Link to="/">About me</Link>
        <Link to="/projects">My projects</Link>
        <Link to="/resume">My resume</Link>
      </div>

      <div className={styles.section}>
        <h3 className={styles.headline}>Contact</h3>
        <button>
          <EmailIcon />
          &nbsp;&nbsp;minhaz.raufoon.1567@gmail.com
        </button>
        <button>
          <PhoneIcon />
          &nbsp;&nbsp;+491788680932
        </button>
      </div>

      <div className={styles.section}>
        <h3 className={styles.headline}>Follow</h3>
        <div className={styles.socialLinks}>
          {list.map((socialLink) => {
            const Icon = getIconComponentBySocialLink(socialLink.type)
            return (
              <a
                key={socialLink.type}
                href={socialLink.url}
                target="_blank"
                rel="noreferrer"
              >
                <Icon />
                &nbsp;&nbsp;{socialLink.type}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

function getIconComponentBySocialLink(linkType) {
  switch (linkType) {
    case 'github':
      return GithubIcon
    case 'linkedin':
      return LinkedinIcon
    case 'xing':
      return XingIcon
    default:
      return null
  }
}
