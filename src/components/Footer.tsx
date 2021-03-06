import { Link } from "react-router-dom"
import { FunctionComponent } from "react"
import useFetchListFromDB from "../hooks/useFetchListFromDB"
import styles from "./Footer.module.scss"
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg"
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin2.svg"
import { ReactComponent as XingIcon } from "../assets/icons/xing2.svg"
import { ReactComponent as EmailIcon } from "../assets/icons/envelop.svg"
import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg"
import { SocialLink } from "../global-types"

export default function Footer() {
  const { list: socialLinks } =
    useFetchListFromDB<SocialLink>(`contact/socialLinks`)

  return (
    <footer className={styles.Footer}>
      <section className={styles.section}>
        <h3 className={styles.headline}>Sitemap</h3>
        <Link to="/">About me</Link>
        <Link to="/projects">My projects</Link>
        <Link to="/resume">My resume</Link>
      </section>

      <section className={styles.section}>
        <h3 className={styles.headline}>Contact</h3>

        <span className={styles.contactInfo}>
          <EmailIcon />
          &nbsp;&nbsp;minhaz.raufoon.1567@gmail.com
        </span>

        <span className={styles.contactInfo}>
          <PhoneIcon />
          &nbsp;&nbsp;+491788680932
        </span>
      </section>

      <section className={styles.section}>
        <h3 className={styles.headline}>Follow</h3>

        <div className={styles.socialLinks}>
          {socialLinks.map((socialLink: SocialLink) => {
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
      </section>
    </footer>
  )
}

function getIconComponentBySocialLink(linkType: string): FunctionComponent {
  switch (linkType) {
    case "github":
      return GithubIcon
    case "linkedin":
      return LinkedinIcon
    case "xing":
      return XingIcon
    default:
      return () => <></>
  }
}
