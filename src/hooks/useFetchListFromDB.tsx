import { useEffect, useState } from "react"
import { readAsList } from "../database"
import { APIResponseWithList } from '../global-types'

const responseFetching: APIResponseWithList = {
  isFetching: true,
  hasError: false,
  list: []
}

function createSuccessfulResponse(list: Array<any>): APIResponseWithList {
  return {
    isFetching: false,
    hasError: false,
    list
  }
}

export default function useFetchListFromDB(path: string) {
  const [info, setInfo] = useState(responseFetching)

  useEffect(() => {
    async function fetchInfo() {
      const info = await readAsList(path)
      setInfo(createSuccessfulResponse(info))
    }
    fetchInfo()
  }, [path])

  return info
}
