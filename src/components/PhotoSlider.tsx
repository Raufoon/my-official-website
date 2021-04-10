import styles from './PhotoSlider.module.css'
import Poster from './Poster'
import { ReactComponent as DashIcon } from '../assets/icons/minus.svg'
import { useEffect, useMemo, useState } from 'react'

interface Props {
  className?: string
  photos: Array<string>
  frameColor?: string
}

export default function PhotoSlider(props: Props) {
  const { photos, frameColor } = props

  const style = useMemo(
    () => ({
      borderColor: frameColor || 'inherit',
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
                fill: index === currentImageIdx ? '#222' : 'var(--color-text)',
              }}
              stroke={'#000'}
            />
            &nbsp;
          </div>
        ))}
      </div>
    </Poster>
  )
}
