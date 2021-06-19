import { fireEvent } from "@testing-library/react"
import closeLastModal from "./close-last-modal"
import { createModal } from "./utils"

afterEach(() => {
  document.getElementById("modal-root")?.remove()
})

test("creates a modal inside the modal root", () => {
  createModal(<div id="content">Hello World</div>)

  const modalRoot = document.getElementById("modal-root")

  expect(modalRoot).toBeValid()
  expect(modalRoot?.childNodes.length).toBe(1)
  expect(document.getElementById("content")?.textContent).toBe("Hello World")
})

test("creates two modals", () => {
  createModal(<div id="content1">Hello World</div>)
  createModal(<div id="content2">Winter is coming</div>)

  const modalRoot = document.getElementById("modal-root")

  expect(modalRoot?.childNodes.length).toBe(2)
})

test("creates two modals and close one", () => {
  createModal(<div id="content1">Hello World</div>)
  createModal(<div id="content2">Winter is coming</div>)

  const modalRoot = document.getElementById("modal-root")

  expect(modalRoot?.childNodes.length).toBe(2)

  closeLastModal()

  expect(modalRoot?.childNodes.length).toBe(1)
})

test("creates two modals and close one by btn click", () => {
  createModal(<div id="content1">Hello World</div>)
  createModal(<div id="content2">Winter is coming</div>)

  const modalRoot = document.getElementById("modal-root")

  expect(modalRoot?.childNodes.length).toBe(2)

  if (modalRoot?.lastElementChild) {
    fireEvent.click(
      modalRoot?.lastElementChild.getElementsByTagName("button")[0]
    )
  }
  expect(modalRoot?.childNodes.length).toBe(1)
})
