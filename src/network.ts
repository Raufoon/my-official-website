import { read, readAsList } from './database'
import { APIResponseWithList } from './global-types'
import { getLStorageItemAsJSON } from './utils'

export async function adaptiveDataFetcher(endpoint: string) {
  const __last_updated = await read('__last_updated')
  const saved__last_updated = localStorage.getItem('__last_updated')

  if (!saved__last_updated || saved__last_updated < __last_updated) {
    return read(endpoint)
  } else {
    return getLStorageItemAsJSON(endpoint)
  }
}

export async function shouldQueryDB() {
  const __last_updated = await read('__last_updated')
  const saved__last_updated = localStorage.getItem('__last_updated')
}
