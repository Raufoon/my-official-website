import { CareerInterest } from "../../global-types"
import styles from "./CareerInterest.module.scss"

type Props = {
  interests: Array<CareerInterest>
}

export default function CareerInterestSection(props: Props) {
  const { interests } = props

  return (
    <article
      className={`centerized atLeastFullHeightUnlessPortrait`}
      style={{ backgroundColor: "var(--color-bg-3)" }}
    >
      <h1>Career Interests</h1>

      <ul className={styles.careerInterests}>
        {interests.map((data) => (
          <li key={data.title}>
            <h4 style={{ margin: "0 0 4px 0" }}>{data.title}</h4>
          </li>
        ))}
      </ul>
    </article>
  )
}
