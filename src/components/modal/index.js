import React, { useState } from "react"
import ReactDOM from "react-dom"
import { getAvailableZIndex, releaseLastZIndex } from "./utils"
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
import styles from "./index.module.css"
import Loader from "../Loader"

export function closeModal(event) {
  if (event) {
    event.persist()
  }
  const lastModalElement = document.getElementById("modal-root").lastChild
  if (lastModalElement) {
    ReactDOM.unmountComponentAtNode(lastModalElement)
    lastModalElement.remove()
    releaseLastZIndex()
  }
}

export function createModal(content, settings = {}) {
  const modalRoot = document.getElementById("modal-root")
  const modalZIndex = getAvailableZIndex()
  const modalElement = document.createElement("div")
  modalRoot.appendChild(modalElement)

  ReactDOM.render(
    <div
      className={styles.Modal}
      style={{ zIndex: modalZIndex }}
      onClick={function onClickOutside() {
        if (!settings.onlyCloseByButton) {
          closeModal()
        }
      }}
    >
      {/* The visible part of the Modal. Around it has a semi transparent effect on the whole window */}
      <div
        className={`${styles.content} ${settings.contentClassName} ${styles.modalzoomin}`}
        onClick={(e) => e.stopPropagation()}
      >
        {!settings.hideClose && (
          <button
            className={styles.closeBtn}
            onClick={closeModal}
            style={{ zIndex: modalZIndex }}
          >
            <CloseIcon height="15px" width="15px" />
          </button>
        )}

        <div
          className={`${styles.children}`}
          style={{ overflow: settings.noScroll && "hidden" }}
        >
          {content}
        </div>
      </div>
    </div>,
    modalElement
  )
}

function ConfirmationModal(props) {
  const { text, confirm, loaderText } = props
  const [pending, setPending] = useState(false)

  if (pending)
    return (
      <div className={styles.ConfirmationModal}>
        <Loader size="20px" text={loaderText || "Loading..."} />
      </div>
    )
  return (
    <div className={styles.ConfirmationModal}>
      <label>{text || "Are you sure?"}</label>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
        <button onClick={closeModal}>No</button>
        <button
          className={styles.confirmBtn}
          onClick={async function (event) {
            setPending(true)
            await confirm()
            closeModal(event)
          }}
        >
          Yes
        </button>
      </div>
    </div>
  )
}

export function onConfirmationPopup(text, confirm, settings = {}) {
  createModal(
    <ConfirmationModal
      text={text}
      confirm={confirm}
      loaderText={settings.loaderText}
    />,
    {
      hideClose: true,
      ...settings,
    }
  )
}
