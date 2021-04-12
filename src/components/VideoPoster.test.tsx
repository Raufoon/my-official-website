import React from 'react'
import { render, screen } from '@testing-library/react'
import VideoPoster from './VideoPoster'

test('displays youtube video in <iframe/>', () => {
  const comp = render(
    <VideoPoster src="https://www.youtube.com/embed/0bsV8J9IoIo" />
  )
  expect(comp.getByTestId('youtube-video-elem').nodeName.toLowerCase()).toBe(
    'iframe'
  )
})

test('displays non-youtube video in <video/>', () => {
  const comp = render(<VideoPoster src="https://i.imgur.com/4tDu1mF.mp4" />)
  expect(comp.getByTestId('rest-video-elem').nodeName.toLowerCase()).toBe(
    'video'
  )
})
