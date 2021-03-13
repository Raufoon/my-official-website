import ProjectCard from '../components/ProjectCard'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard,
}

const Template = (args) => (
  <MemoryRouter>
    <ProjectCard {...args} />
  </MemoryRouter>
)

export const ProjectWithPhotos = Template.bind({})
ProjectWithPhotos.args = {
  id: 'sci-calc',
  title: 'Scientific Calculator',
  subtitle: 'Some details here',
  type: 'Desktop App',
  invertLayout: false,
  photos: [
    'https://firebasestorage.googleapis.com/v0/b/minhaz-raufoon.appspot.com/o/projects%2Fp100003%2Fslide1.png?alt=media&token=e1bacbd6-49a0-44b9-a766-93490adde98c',
  ],
  technologies: ['Java'],
  links: [
    {
      type: 'github',
      url: 'https://github.com/Anishom/jumping-jet-game-sdl2',
    },
  ],
  video: null,
}

export const ProjectWithVideo = Template.bind({})
ProjectWithVideo.args = {
  id: 'jumpintjett-game',
  title: 'Jumping Jett',
  subtitle: 'Some details here',
  type: 'Desktop App',
  invertLayout: true,
  technologies: ['C++'],
  links: [
    {
      type: 'github',
      url: 'https://github.com/Anishom/jumping-jet-game-sdl2',
    },
  ],
  video: 'https://i.imgur.com/4tDu1mF.mp4',
}
