import ReactDOM from "react-dom"
import Modal from "./Modal"
import ConfirmationModal from "./ConfirmationModal"
import { ModalSettings } from "./types"

function getLastUsedZIndex(): number {
  return parseInt(sessionStorage.getItem("rfn-modal-lzi") || "1000", 10)
}

function setLastUsedZIndex(value: number): void {
  sessionStorage.setItem("rfn-modal-lzi", value.toString())
}

export function releaseLastUsedZIndex(): void {
  const zindex = getLastUsedZIndex()
  setLastUsedZIndex(zindex - 1)
}

export function getHighestAvailableZIndex(): number {
  const zindex = getLastUsedZIndex()
  setLastUsedZIndex(zindex + 1)
  return zindex + 1
}

export function getModalRootElement(): HTMLElement {
  const mroot = document.getElementById("modal-root")

  if (!mroot) {
    const newMroot: HTMLElement = document.createElement("div")
    newMroot.setAttribute("id", "modal-root")
    document.body.appendChild(newMroot)
    return newMroot
  }
  return mroot
}

export function getLastModalElement(): HTMLElement {
  return getModalRootElement().lastChild as HTMLElement
}

export function createModal(content: any, settings: ModalSettings = {}): void {
  const mroot: HTMLElement = getModalRootElement()
  const zIndex = getHighestAvailableZIndex()

  const modal: HTMLElement = document.createElement("div")
  mroot.appendChild(modal)

  ReactDOM.render(
    <Modal zIndex={zIndex} settings={settings}>
      {content}
    </Modal>,
    modal
  )
}

export function closeLastModal(event?: any): void {
  if (event) event.persist()
  const elem = getLastModalElement()
  if (elem) {
    ReactDOM.unmountComponentAtNode(elem)
    elem.remove()
    releaseLastUsedZIndex()
  }
}

export function onConfirmationPopup(
  text: string,
  confirm: any,
  settings: ModalSettings
) {
  createModal(
    <ConfirmationModal
      text={text}
      confirm={confirm}
      loader={settings.loader}
    />,
    {
      ...settings,
      hideClose: true,
    }
  )
}
