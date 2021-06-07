import { Skill } from "../../global-types"
import styles from "./SkillSection.module.css"
import { lightColor } from "../../utils"

type Props = {
  skills: Array<Skill>
}

const compareSkills = (a: Skill, b: Skill) =>
  a.score * a.importance < b.score * b.importance ? 1 : -1

export default function SkillSection(props: Props) {
  const { skills } = props

  return (
    <article className={styles.SkillSection}>
      <h1>Skills</h1>

      <div className={styles.container}>
        {skills.sort(compareSkills).map((skill) => (
          <h3 key={skill.name} style={{ color: lightColor() }}>
            {skill.name}
          </h3>
        ))}
      </div>
    </article>
  )
}
