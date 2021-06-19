import ReactDOM from "react-dom"
import { getHighestAvailableZIndex, getModalRootElement } from "./utils"
import Modal from "./Modal"
import { ModalSettings } from "./types"

export default function createModal(
  content: any,
  settings: ModalSettings = {}
): void {
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
