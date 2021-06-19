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
