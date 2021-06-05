import { CareerInterests } from "../../global-types"
import styles from "./CareerInterest.module.css"

type Props = {
  interests: CareerInterests
}

export default function CareerInterest(props: Props) {
  const { interests } = props

  return (
    <article
      className={`centerized atLeastFullHeightUnlessPortrait`}
      style={{ backgroundColor: "var(--color-bg-3)" }}
    >
      <h1>Career interests</h1>

      <ul className={styles.careerInterests}>
        {interests.map((data) => (
          <li key={data.title}>
            <h4 style={{ margin: "0 0 4px 0" }}>{data.title}</h4>
            <small>{data.subtitle}</small>
          </li>
        ))}
      </ul>
    </article>
  )
}
