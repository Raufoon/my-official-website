import { JobExperience } from "../global-types"
import styles from "./JobExperienceRecord.module.scss"

export default function JobExperienceRecord(props: JobExperience) {
  const { start, end, company, title, role, website } = props
  return (
    <div className={styles.JobExperienceRecord}>
      <span
        className={`${styles.dateRange} centerized`}
        style={{ borderRight: `3px solid #b4d4f2` }}
      >
        {start} - {end}
      </span>

      <b style={{ gridRow: 2 }}>{title}</b>

      <a href={website} style={{ gridRow: 3 }} target="_blank" rel="noreferrer">
        {company}
      </a>

      <span style={{ gridRow: 4 }}>{role}</span>
    </div>
  )
}
