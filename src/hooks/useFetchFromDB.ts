import { useEffect, useMemo, useState } from 'react'
import { read } from '../database'
import { APIResponse } from '../global-types'
import { getLStorageItemAsJSON, getSStorageItemAsJSON } from '../utils'

export default function useFetchFromDB<T>(path: string): APIResponse<T> {
  const initialResponse = useMemo(() => {
    return (
      getLStorageItemAsJSON(path) || {
        isFetching: true,
        hasError: false,
        data: null,
      }
    )
  }, [path])

  const [response, setResponse] = useState(initialResponse)

  useEffect(() => {
    async function fetchInfo() {
      try {
        const data = await read(path)
        const response = {
          isFetching: false,
          hasError: false,
          data,
        }
        setResponse(response)
        sessionStorage.setItem(path, JSON.stringify(response))
        localStorage.setItem(path, JSON.stringify(response))
      } catch (err) {
        setResponse({
          isFetching: false,
          hasError: true,
          data: null,
        })
      }
    }
    if (!sessionStorage.getItem(path)) fetchInfo()
    else setResponse(getSStorageItemAsJSON(path))
  }, [path])

  return response
}
