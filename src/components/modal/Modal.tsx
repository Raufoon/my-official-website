import styles from "./Modal.module.scss"
import IconButton from "../IconButton"
import { closeLastModal } from "./utils"
import { ReactComponent as CloseIcon } from "./close-icon.svg"
import { ModalSettings } from "./types"
import { useEffect } from "react"

interface Props {
  zIndex: number
  settings: ModalSettings
  children: any
}

export default function Modal(props: Props) {
  const { zIndex, settings, children } = props

  useEffect(function registerLocationChangeListeners() {
    function closeLastModalOnLocationChange() {
      closeLastModal()
    }

    window.addEventListener("popstate", closeLastModalOnLocationChange)

    return () => {
      window.removeEventListener("popstate", closeLastModalOnLocationChange)
    }
  }, [])

  return (
    <section className={styles.Modal} style={{ zIndex }}>
      <div
        className={`${styles.content} ${styles.zoomin}`}
        onClick={(e) => e.stopPropagation()}
      >
        {!settings.hideClose && (
          <IconButton
            btnClassName={styles.closeBtn}
            onClick={closeLastModal}
            btnStyle={{ zIndex }}
            Icon={CloseIcon}
          />
        )}

        <div
          className={styles.children}
          style={{ overflow: settings.noScroll ? "hidden" : "auto" }}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
