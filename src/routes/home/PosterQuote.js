import { useEffect, useState } from "react"
import Poster from "../../components/Poster"
import styles from "./PosterQuote.module.css"
import { ReactComponent as EnlargeIcon } from "../../assets/icons/enlarge2.svg"
import { ReactComponent as ShrinkIcon } from "../../assets/icons/shrink2.svg"

export default function PosterQuote(props) {
  const [isEnlarged, setEnlarged] = useState(false)
  const {
    isFetching,
    url,
    media_type,
    title,
    explanation,
  } = useAstronomyPicOfTheDay()

  if (isFetching) return "Loading..."

  return (
    <Poster
      className={styles.PosterQuote}
      src={url}
      style={{
        height: isEnlarged ? "unset" : "30vh",
        backgroundPosition: isEnlarged ? "center" : "top",
      }}
    >
      <h3>
        <button onClick={() => setEnlarged((state) => !state)}>
          {isEnlarged ? <ShrinkIcon /> : <EnlargeIcon />}
        </button>
        &nbsp;&nbsp;{title}
      </h3>
      {media_type === "video" && <iframe title="youtube" src={url}></iframe>}
      {isEnlarged && <p>{explanation}</p>}
    </Poster>
  )
}

const APOD_ENDPOINT =
  "https://api.nasa.gov/planetary/apod?api_key=s6nuZEaQD10lc8iOwCQmzxhJTuhQYxsxcJ0ff5z7"

function useAstronomyPicOfTheDay() {
  const [apodData, setApodData] = useState({
    isFetching: true,
    hasError: false,
  })

  useEffect(function () {
    fetch(APOD_ENDPOINT, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(function (data) {
        setApodData(data)
      })
  }, [])

  return apodData
}
