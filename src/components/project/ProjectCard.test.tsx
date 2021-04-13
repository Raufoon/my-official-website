import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ProjectCard from './ProjectCard'

test('displays tech label correctly', () => {
  render(
    <BrowserRouter>
      <ProjectCard
        id="ID1567"
        title="Sample project title"
        subtitle="Sample project subtitle"
        type="Sample type"
        invertLayout={false}
        photos={['https://i.imgur.com/K9Nkdus.jpg']}
        technologies={['React', 'Redux']}
        links={[{ type: 'github', url: 'sample_url' }]}
        priority={1}
      />
    </BrowserRouter>
  )

  expect(screen.getByTestId('project-type').textContent).toBe('Sample type')
  expect(screen.getByTestId('project-title').textContent).toBe(
    'Sample project title'
  )
  expect(screen.getByTestId('project-subtitle').textContent).toBe(
    'Sample project subtitle'
  )
  expect(screen.getByTestId('project-techs').childElementCount).toBe(2)
  expect(screen.getByTestId('project-links').childElementCount).toBe(2)
})
