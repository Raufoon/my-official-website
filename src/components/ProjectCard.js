import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import PhotoSlider from './PhotoSlider'
import styles from './ProjectCard.module.css'
import ProjectLinkIcon from './ProjectLinkIcon'
import TechLabel from './TechLabel'
import VideoPoster from './VideoPoster'

export default function ProjectCard(props) {
  const {
    id,
    title,
    subtitle,
    type,
    invertLayout,
    photos,
    technologies,
    links,
    video,
  } = props

  const monolithStyle = useMemo(
    () => ({
      color: getMonolithTheme(type),
    }),
    [type]
  )

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
              &nbsp;&nbsp;{link.type}
            </a>
          ))}

          <Link to={`/projects/${id}`}>more</Link>
        </div>
      </div>

      {video ? (
        <VideoPoster className={styles.photoSlider} src={video} />
      ) : (
        <PhotoSlider
          className={styles.photoSlider}
          frameColor={'lightgray'}
          photos={photos}
        />
      )}
    </div>
  )
}

function getMonolithTheme(projectType) {
  switch (projectType) {
    case 'Frontend Web':
      return '#3b9ed6'

    case 'Desktop App':
      return '#cc6540'

    case 'Desktop Game':
      return '#f6546a'

    case 'Full Stack Web':
      return '#6f549a'

    case 'Assembly':
      return '#ff6367'

    case 'Research Project':
      return '#003366'

    default:
      return 'var(--color-2)'
  }
}
