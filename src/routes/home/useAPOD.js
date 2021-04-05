import { useEffect, useState } from 'react'

const APOD_ENDPOINT =
  'https://api.nasa.gov/planetary/apod?api_key=s6nuZEaQD10lc8iOwCQmzxhJTuhQYxsxcJ0ff5z7'

export default function useAPOD() {
  const [apodData, setApodData] = useState({
    isFetching: true,
    hasError: false,
  })

  useEffect(function () {
    fetch(APOD_ENDPOINT, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then(function (data) {
        setApodData(data)
      })
  }, [])

  return apodData
}
