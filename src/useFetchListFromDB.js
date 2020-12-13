import { useEffect, useState } from "react"
import { readAsList } from "./database"

export default function useFetchListFromDB(path, options) {
  const [info, setInfo] = useState({
    isFetching: true,
    hasError: false,
  })

  useEffect(() => {
    async function fetchInfo() {
      const info = await readAsList(path)
      setInfo({
        list: info,
      })
    }
    fetchInfo()
  }, [path])

  return info
}
