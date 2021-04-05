import styles from "./index.module.css"

const CV_DE =
  "https://firebasestorage.googleapis.com/v0/b/minhaz-raufoon.appspot.com/o/business-card%2Fcv-de.pdf?alt=media&token=7fb95a20-4aa5-4ec7-a1eb-0524a106c2b2"

export default function Resume() {
  return (
    <div className={styles.Resume}>
      <iframe
        className={styles.content}
        title="resume"
        src={CV_DE}
        frameBorder="0"
      ></iframe>
    </div>
  )
}
