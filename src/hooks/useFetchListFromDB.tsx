import { useEffect, useState } from "react"
import { readAsList } from "../database"
import { APIResponseWithList } from '../global-types'

const responseFetching: APIResponseWithList<any> = {
  isFetching: true,
  hasError: false,
  list: []
}

function createSuccessfulResponse<T>(list: Array<T>): APIResponseWithList<T> {
  return {
    isFetching: false,
    hasError: false,
    list
  }
}

export default function useFetchListFromDB<T>(path: string): APIResponseWithList<T> {
  const [response, setResponse] = useState(responseFetching)

  useEffect(() => {
    async function fetchInfo() {
      const data = await readAsList(path)
      setResponse(createSuccessfulResponse(data))
    }
    fetchInfo()
  }, [path])

  return response
}
