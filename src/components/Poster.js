import { useCallback, useMemo } from "react"
import { createModal } from "./modal"
import styles from "./Poster.module.css"

export default function Poster(props) {
  const { className, src, style, children, zoomable } = props

  const zoom = useCallback(() => {
    if (!zoomable) return

    createModal(
      <img
        src={src}
        style={{ maxWidth: "80vw", maxHeight: "90vh" }}
        alt="zoomed view"
      />
    )
  }, [src, zoomable])

  const customStyle = useMemo(
    () => ({
      backgroundImage: `url(${src})`,
      cursor: zoomable ? "pointer" : "inherit",
      ...(style || {}),
    }),
    [src, style, zoomable]
  )

  return (
    <div
      className={`${styles.Poster} ${className}`}
      style={customStyle}
      onClick={zoom}
    >
      {children || <>&nbsp;</>}
    </div>
  )
}
