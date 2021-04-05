import ReactDOM from 'react-dom'
import { releaseLastUsedZIndex, getLastModalElement } from './utils'

export default function closeLastModal(event?: any): void {
  if (event) event.persist()
  const elem = getLastModalElement()
  if (elem) {
    ReactDOM.unmountComponentAtNode(elem)
    elem.remove()
    releaseLastUsedZIndex()
  }
}
