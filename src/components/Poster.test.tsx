import { fireEvent, render } from '@testing-library/react'
import Poster from './Poster'

let comp: any

const imgUrl = 'https://i.imgur.com/1yOpBb9.jpg'

beforeEach(() => {
  comp = render(<Poster src={imgUrl} zoomable={true} />)
})

test('displays background image from URL', () => {
  expect(comp.getByTestId('poster-container')).toHaveStyle(
    `background-image: url(${imgUrl})`
  )
})

test('opens a modal when clicked', () => {
  const modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal-root')
  document.body.appendChild(modalRoot)

  expect(modalRoot?.children.length).toBe(0)

  fireEvent.click(comp.getByTestId('poster-container'))

  expect(modalRoot?.children.length).toBe(1)
})
