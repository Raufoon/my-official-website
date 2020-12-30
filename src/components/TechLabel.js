import { useMemo } from 'react'

export default function TechLabel({ type, children }) {
  const labelStyle = useMemo(() => {
    let color = '#222'

    switch (type.toLowerCase()) {
      case 'express.js':
      case 'sdl2':
      case 'react.js':
        color = '#045463'
        break

      case 'javascript':
      case 'c++':
      case 'assembly-language':
      case 'java':
        color = '#e57300'
        break

      case 'graphql':
      case 'firebase':
      case 'postgresql':
        color = '#0000ff'
        break

      case 'angularjs':
      case 'django':
        color = '#14755d'
        break

      default:
        color = 'gray'
    }
    return {
      color,
      fontSize: '16px',
      fontFamily: 'monospace',
    }
  }, [type])

  return <label style={labelStyle}>{children || type}</label>
}
