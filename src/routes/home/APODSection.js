import styles from './APODSection.module.css'
import Loader from '../../components/Loader'
import useAPOD from './useAPOD'

export default function APODSection(props) {
  const {
    isFetching,
    url,
    media_type,
    title,
    explanation,
    className,
  } = useAPOD()

  if (isFetching) return <Loader />

  if (media_type === 'video') return false

  return (
    <section
      className={`${styles.APODSection} ${className}`}
      style={{ backgroundImage: `url(${url})` }}
    >
      <h3>{title}&nbsp;(Astronomy picture of the day)</h3>
      <p>{explanation}</p>
    </section>
  )
}
