import styles from "./PhotoSlider.module.css"
import Poster from "./Poster"
import { ReactComponent as DashIcon } from "../assets/icons/minus.svg"
import { useEffect, useState } from "react"

const PHOTOS = [
  "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
  "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg",
]

export default function PhotoSlider(props) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0)
  const photos = props.photos || PHOTOS

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % photos.length)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [photos])

  return (
    <div className={styles.PhotoSlider}>
      <Poster className={styles.poster} src={photos[currentImageIdx]} />

      <div className={styles.dots}>
        {photos.map((photo, index) => (
          <div key={index}>
            &nbsp;
            <DashIcon
              style={{
                fill:
                  index === currentImageIdx ? "yellow" : "var(--color-text)",
              }}
            />
            &nbsp;
          </div>
        ))}
      </div>
    </div>
  )
}
