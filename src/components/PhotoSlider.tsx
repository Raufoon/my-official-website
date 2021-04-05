import styles from "./PhotoSlider.module.css"
import Poster from "./Poster"
import { ReactComponent as DashIcon } from "../assets/icons/minus.svg"
import { useEffect, useMemo, useState } from "react"

const PHOTOS = [
  "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
  "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg",
]

interface Props {
  className?: string
  photos: Array<string>
  frameColor?: string
}

export default function PhotoSlider(props: Props) {
  const photos = props.photos || PHOTOS
  const { frameColor } = props

  const style = useMemo(
    () => ({
      borderColor: frameColor || "inherit",
    }),
    [frameColor]
  )

  const [currentImageIdx, setCurrentImageIdx] = useState(0)

  useEffect(() => {
    if (photos.length < 2) return

    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % photos.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [photos])

  return (
    <Poster
      className={`${styles.PhotoSlider} ${props.className}`}
      style={style}
      src={photos[currentImageIdx]}
      zoomable={true}
    >
      <div className={styles.dots}>
        {photos.map((photo, index) => (
          <div key={index}>
            &nbsp;
            <DashIcon
              style={{
                fill: index === currentImageIdx ? "#222" : "var(--color-text)",
              }}
              stroke={"#000"}
            />
            &nbsp;
          </div>
        ))}
      </div>
    </Poster>
  )
}
