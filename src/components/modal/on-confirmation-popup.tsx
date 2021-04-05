import React from 'react'
import ConfirmationModal from './ConfirmationModal'
import createModal, { ModalSettings } from './create-modal'

export default function onConfirmationPopup(text: string, confirm: any, settings: ModalSettings) {
  createModal(
    <ConfirmationModal
      text={text}
      confirm={confirm}
      loader={settings.loader}
    />,
    {
      ...settings,
      hideClose: true
    }
  )
}