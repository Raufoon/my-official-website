import EducationRecord from "../../components/EducationRecord"
import { Education } from "../../global-types"

type Props = {
  history: Array<Education>
}

export default function EducationHistory(props: Props) {
  const { history } = props
  return (
    <article
      className="centerized atLeastFullHeightUnlessPortrait"
      style={{ backgroundColor: "var(--color-bg-4)" }}
    >
      <h1>My academic life</h1>

      <div>
        {history
          .map((ed) => <EducationRecord key={ed.degree} {...ed} />)
          .reverse()}
      </div>
    </article>
  )
}
