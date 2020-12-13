import { useEffect, useState } from "react"
import { read } from "./database"

export default function useFetchFromDB(path, options) {
  const [info, setInfo] = useState({
    isFetching: true,
    hasError: false,
  })

  useEffect(() => {
    async function fetchInfo() {
      const info = await read(path)
      setInfo(info)
    }
    fetchInfo()
  }, [path])

  return info
}
