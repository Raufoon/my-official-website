import { useCallback, useState } from "react"
import { closeLastModal } from "./utils"
const styles = require("./ConfirmationModal.module.scss")

interface Props {
  text?: string
  confirm: any
  loader: any
}

export default function ConfirmationModal(props: Props) {
  const { text, confirm, loader } = props
  const [pending, setPending] = useState(false)

  const onConfirm = useCallback(
    async (event) => {
      setPending(true)
      await confirm()
      closeLastModal(event)
    },
    [confirm]
  )

  if (pending) {
    return (
      <div className={styles.ConfirmationModal}>{loader || `Loading...`}</div>
    )
  }
  return (
    <section className={styles.ConfirmationModal}>
      <label>{text || `Are you sure?`}</label>
      <div style={{ display: "flex", flexDirection: "row", marginTop: `10px` }}>
        <button onClick={closeLastModal}>No</button>
        <button className={styles.confirmBtn} onClick={onConfirm}>
          Yes
        </button>
      </div>
    </section>
  )
}
