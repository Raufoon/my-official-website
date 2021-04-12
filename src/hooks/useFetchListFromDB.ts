import { useEffect, useMemo, useState } from 'react'
import { readAsList } from '../database'
import { APIResponseWithList } from '../global-types'
import { getLStorageItemAsJSON, getSStorageItemAsJSON } from '../utils'

export default function useFetchListFromDB<T>(
  path: string
): APIResponseWithList<T> {
  const initialResponse = useMemo(() => {
    return (
      getLStorageItemAsJSON(path) || {
        isFetching: true,
        hasError: false,
        list: [],
      }
    )
  }, [path])

  const [response, setResponse] = useState(initialResponse)

  useEffect(() => {
    async function fetchInfo() {
      try {
        const list = await readAsList(path)
        const response = {
          isFetching: false,
          hasError: false,
          list,
        }
        setResponse(response)
        sessionStorage.setItem(path, JSON.stringify(response))
        localStorage.setItem(path, JSON.stringify(response))
      } catch (err) {
        setResponse({
          isFetching: false,
          hasError: true,
          list: [],
        })
      }
    }
    if (!sessionStorage.getItem(path)) fetchInfo()
    else setResponse(getSStorageItemAsJSON(path))
  }, [path])

  return response
}
