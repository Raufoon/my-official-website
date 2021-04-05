import { useEffect, useState } from 'react'
import { read } from './database'

export default function useFetchFromDB(path) {
  const [info, setInfo] = useState({
    isFetching: true,
    hasError: false,
  })

  useEffect(() => {
    async function fetchInfo() {
      try {
        const info = await read(path)
        setInfo(info)
      } catch (err) {
        setInfo({
          hasError: true,
        })
      }
    }
    fetchInfo()
  }, [path])

  return info
}
