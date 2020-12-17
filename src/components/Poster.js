import { useMemo } from "react"
import styles from "./Poster.module.css"

export default function Poster(props) {
  const { className, src, style, children } = props

  const customStyle = useMemo(
    () => ({
      backgroundImage: `url(${src})`,
      ...(style || {}),
    }),
    [src, style]
  )

  return (
    <div className={`${styles.Poster} ${className}`} style={customStyle}>
      {children || <>&nbsp;</>}
    </div>
  )
}
