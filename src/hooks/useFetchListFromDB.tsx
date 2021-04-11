import { useEffect, useState } from 'react'
import { readAsList } from '../database'
import { APIResponseWithList } from '../global-types'
import { getSStorageItemAsJSON } from '../utils'

const responseFetching: APIResponseWithList<any> = {
  isFetching: true,
  hasError: false,
  list: [],
}

const errorResponse: APIResponseWithList<any> = {
  isFetching: false,
  hasError: true,
  list: [],
}

function createSuccessfulResponse<T>(list: Array<T>): APIResponseWithList<T> {
  return {
    isFetching: false,
    hasError: false,
    list,
  }
}

export default function useFetchListFromDB<T>(
  path: string
): APIResponseWithList<T> {
  const [response, setResponse] = useState(
    getSStorageItemAsJSON(path) || responseFetching
  )

  useEffect(() => {
    async function fetchInfo() {
      try {
        const data = await readAsList(path)
        const response = createSuccessfulResponse(data)
        setResponse(response)
        sessionStorage.setItem(path, JSON.stringify(response))
      } catch (err) {
        setResponse(errorResponse)
      }
    }
    if (!sessionStorage.getItem(path)) fetchInfo()
  }, [path])

  return response
}
