import JobExperienceRecord from "../../components/JobExperienceRecord"
import { JobExperience } from "../../global-types"

type Props = {
  history: Array<JobExperience>
}

export default function JobExperiences(props: Props) {
  const { history } = props
  return (
    <article
      className={`centerized atLeastFullHeightUnlessPortrait`}
      style={{ backgroundColor: "var(--color-bg-3)" }}
    >
      <h1>Work Experience</h1>

      <div>
        {history
          .map((exp) => (
            <JobExperienceRecord key={`${exp.start}-${exp.company}`} {...exp} />
          ))
          .reverse()}
      </div>
    </article>
  )
}
