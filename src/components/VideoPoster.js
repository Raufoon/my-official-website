import styles from './VideoPoster.module.css'

export default function VideoPoster({ className, src }) {
  return (
    <div className={`${styles.VideoPoster} ${className}`}>
      <video src={src} controls></video>
    </div>
  )
}
