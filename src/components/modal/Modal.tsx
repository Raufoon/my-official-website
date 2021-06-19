import styles from "./Modal.module.scss"
import IconButton from "../IconButton"
import closeLastModal from "./close-last-modal"
import { ReactComponent as CloseIcon } from "./close-icon.svg"
import { ModalSettings } from "./types"

interface Props {
  zIndex: number
  settings: ModalSettings
  children: any
}

export default function Modal(props: Props) {
  const { zIndex, settings, children } = props

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
