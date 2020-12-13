import styles from "./Poster.module.css"

export default function Poster(props) {
  const { className, src, style } = props
  return (
    <div
      className={`${styles.Poster} ${className}`}
      style={{
        backgroundImage: `url(${src})`,
        ...(style || {}),
      }}
    >
      &nbsp;
    </div>
  )
}
