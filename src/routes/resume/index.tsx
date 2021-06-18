import { useState } from "react"
import styles from "./index.module.scss"

const CV_DE =
  "https://firebasestorage.googleapis.com/v0/b/minhaz-raufoon.appspot.com/o/pdfs%2FLebenslauf%20-%20Minhaz%20Raufoon.pdf?alt=media&token=9281d95a-70bf-4e22-af7a-99deb07f47e7"

const CV_EN =
  "https://firebasestorage.googleapis.com/v0/b/minhaz-raufoon.appspot.com/o/pdfs%2FCV%20-%20Minhaz%20Raufoon.pdf?alt=media&token=4b2be226-db72-4a39-b277-00cdbe0e4a27"

export default function Resume() {
  const [resumeUrl, setResumeUrl] = useState(CV_DE)

  return (
    <section className={styles.Resume}>
      <nav>
        <button
          className={resumeUrl === CV_DE ? styles.active : ""}
          onClick={(_) => setResumeUrl(CV_DE)}
        >
          DE
        </button>
        <button
          className={resumeUrl === CV_EN ? styles.active : ""}
          onClick={(_) => setResumeUrl(CV_EN)}
        >
          EN
        </button>
      </nav>
      <iframe
        className={styles.content}
        title="resume"
        src={resumeUrl}
        frameBorder="0"
      ></iframe>
    </section>
  )
}
