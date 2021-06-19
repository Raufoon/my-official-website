import { Education } from "../global-types"
import styles from "./EducationRecord.module.scss"

export default function EducationRecord(props: Education) {
  const { almaMater, dateRange, website, degree, location, major, color } =
    props

  return (
    <div className={styles.EducationRecord}>
      <span
        className={`${styles.dateRange} centerized`}
        style={{ borderRight: `3px solid ${color}` }}
      >
        {dateRange}
      </span>

      <a
        href={website}
        target="_blank"
        rel="noreferrer"
        style={{ gridRow: 2, color }}
      >
        {almaMater}
      </a>

      <span style={{ gridRow: 3 }}>{degree}</span>

      <span style={{ gridRow: 4 }}>{major}</span>

      <span style={{ gridRow: 5 }}>{location}</span>
    </div>
  )
}
