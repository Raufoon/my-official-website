import styles from './VideoPoster.module.css'

export default function VideoPoster({ className, src }) {
  const isYoutubeLink = src.indexOf('youtube.com') !== -1

  return (
    <div className={`${styles.VideoPoster} ${className}`}>
      {isYoutubeLink && <iframe title="Youtube link" src={src}></iframe>}
      {!isYoutubeLink && <video src={src} controls></video>}
    </div>
  )
}
