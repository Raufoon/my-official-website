import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.section}>
        <h3 className={styles.headline}>Contact</h3>
        <label>minhaz.raufoon.1567@gmail.com</label>
        <label>+491788680932</label>
      </div>
    </footer>
  )
}
