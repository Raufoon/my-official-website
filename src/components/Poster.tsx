import { useCallback, useMemo } from "react"
import { createModal } from "./modal"
import styles from "./Poster.module.scss"

interface Props {
  className?: string
  src: string
  style?: any
  children?: any
  zoomable?: boolean
}

export default function Poster(props: Props) {
  const { className, src, style, children, zoomable } = props

  const zoom = useCallback(() => {
    if (zoomable) {
      createModal(
        <img
          src={src}
          style={{ maxWidth: "80vw", maxHeight: "80vh" }}
          alt="zoomed view"
        />
      )
    }
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
      data-testid="poster-container"
    >
      {children || <>&nbsp;</>}
    </div>
  )
}
