import { Education } from '../global-types'
import styles from './EducationRecord.module.css'

export default function EducationRecord(props: Education) {
  const { almaMater, dateRange, degree, location, major, color } = props
  return (
    <div className={styles.EducationRecord}>
      <span
        className={`${styles.dateRange} centerized`}
        style={{ borderRight: `3px solid ${color}` }}
      >
        {dateRange}
      </span>

      <b style={{ gridRow: 2, color }}>{almaMater}</b>

      <span style={{ gridRow: 3 }}>{degree}</span>

      <span style={{ gridRow: 4 }}>{major}</span>

      <span style={{ gridRow: 5 }}>{location}</span>
    </div>
  )
}
