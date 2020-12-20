import { useState } from "react"
import styles from "./ExtendableTextContent.module.css"

export default function ExtendableTextContent({ paragraphs }) {
  const [isExtended, setExtended] = useState(false)
  if (isExtended) {
    return (
      <div className={styles.ExtendableTextContent}>
        {paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    )
  }
  return (
    <div className={styles.ExtendableTextContent}>
      <p>{paragraphs[0]}</p>
      <button onClick={() => setExtended(true)}>MORE</button>
    </div>
  )
}
