import ReactDOM from 'react-dom'
import { getHighestAvailableZIndex, getModalRootElement } from './utils'
import closeLastModal from './close-last-modal'
import styles from './styles.module.css'
import { ReactComponent as CloseIcon } from './close-icon.svg'
import IconButton from '../IconButton'

export interface ModalSettings {
  onlyCloseByButton?: boolean
  contentClassName?: string
  hideClose?: boolean
  noScroll?: boolean
  loader?: any
}

export default function createModal(
  content: any,
  settings: ModalSettings = {}
): void {
  const mroot: HTMLElement = getModalRootElement()
  const zIndex = getHighestAvailableZIndex()

  const modal: HTMLElement = document.createElement('div')
  mroot.appendChild(modal)

  ReactDOM.render(
    <div className={styles.Modal} style={{ zIndex }}>
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
          style={{ overflow: settings.noScroll ? 'hidden' : 'auto' }}
        >
          {content}
        </div>
      </div>
    </div>,
    modal
  )
}
