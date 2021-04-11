import { useEffect, useState } from 'react'
import { read } from '../database'
import { APIResponse } from '../global-types'
import { getSStorageItemAsJSON } from '../utils'

const fetchingResponse: APIResponse<any> = {
  isFetching: true,
  hasError: false,
  data: null,
}

const errorResponse: APIResponse<any> = {
  isFetching: false,
  hasError: true,
  data: null,
}

function createSuccessResponse<T>(data: any): APIResponse<T> {
  return {
    isFetching: false,
    hasError: false,
    data,
  }
}

export default function useFetchFromDB<T>(path: string): APIResponse<T> {
  const [response, setResponse] = useState(fetchingResponse)

  useEffect(() => {
    async function fetchInfo() {
      try {
        const info = await read(path)
        const response = createSuccessResponse(info)
        setResponse(response)
        sessionStorage.setItem(path, JSON.stringify(response))
      } catch (err) {
        setResponse(errorResponse)
      }
    }
    if (!sessionStorage.getItem(path)) fetchInfo()
    else setResponse(getSStorageItemAsJSON(path))
  }, [path])

  return response
}
