import React from 'react'
import ReactDOM from 'react-dom'
import { getHighestAvailableZIndex, getModalRootElement } from './utils'
import closeLastModal from './close-last-modal'
const styles = require('./styles.module.css')

export interface ModalSettings {
  onlyCloseByButton?: boolean
  contentClassName?: string
  hideClose?: boolean
  noScroll?: boolean
  loader?: any
}

export default function createModal(content: any, settings: ModalSettings = {}): void {
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
          <button
            className={styles.closeBtn}
            onClick={closeLastModal}
            style={{ zIndex }}
          >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" fill='crimson' width="15px" height="15px" viewBox="0 0 22 28">
            <title>close</title>
            <path d="M20.281 20.656c0 0.391-0.156 0.781-0.438 1.062l-2.125 2.125c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-4.594-4.594-4.594 4.594c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-2.125-2.125c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l4.594-4.594-4.594-4.594c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.594 4.594-4.594c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062s-0.156 0.781-0.438 1.062l-4.594 4.594 4.594 4.594c0.281 0.281 0.438 0.672 0.438 1.062z"></path>
            </svg>
          </button>
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