import { useContext, useMemo } from 'react'
import { SettingsContext } from '../settings'
import useFetchFromDB from '../useFetchFromDB'
import PhotoSlider from './PhotoSlider'
import styles from './Project.module.css'
import ProjectLinkIcon from './ProjectLinkIcon'
import TechLabel from './TechLabel'

export default function Project({ project, invertLayout }) {
  const { id, type, photos, technologies, links } = project

  const { settings } = useContext(SettingsContext)

  const { isFetching, hasError, title, subtitle } = useFetchFromDB(
    `${settings.lang}/projects/${id}`
  )

  const monolithStyle = useMemo(
    () => ({
      backgroundColor: getMonolithTheme(type),
    }),
    [type]
  )

  if (isFetching || hasError) return false

  return (
    <div className={`${styles.Project} ${invertLayout ? styles.inverted : ''}`}>
      <div className={styles.monolith} style={monolithStyle}>
        <h3>{type}</h3>
      </div>

      <div className={styles.details}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className={styles.technologies}>
          {technologies.map((tech) => (
            <TechLabel key={tech} type={tech} />
          ))}
        </div>
        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.type} href={link.url} target="_blank" rel="noreferrer">
              <ProjectLinkIcon type={link.type} />
            </a>
          ))}
        </div>
      </div>

      <PhotoSlider
        className={styles.photoSlider}
        frameColor={'lightgray'}
        photos={photos}
      />
    </div>
  )
}

function getMonolithTheme(projectType) {
  switch (projectType) {
    case 'Frontend Web':
      return '#3b9ed6'

    case 'Desktop App':
      return '#ffa500'

    case 'Desktop Game':
      return '#f6546a'

    case 'Full Stack Web':
      return '#6f549a'

    case 'Assembly':
      return '#ff6367'

    default:
      return 'var(--color-2)'
  }
}
