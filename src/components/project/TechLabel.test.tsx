import { render } from '@testing-library/react'
import TechLabel from './TechLabel'

test('displays tech label correctly', () => {
  const comp = render(<TechLabel type="React" />)
  expect(comp.baseElement.textContent).toBe('React')
})
