import { useMemo } from "react"

export default function TechLabel({ type }) {
  const labelStyle = useMemo(() => {
    let color = "#222"
    switch (type.toLowerCase()) {
      case "redux.js":
        color = "#392897"
        break

      case "html5":
        color = "#994c30"
        break

      case "react.js":
        color = "#045463"
        break

      case "css":
        color = "#0000ff"
        break

      case "javascript":
        color = "#e57300"
        break

      case "graphql":
        color = "#F300A7"
        break

      case "firebase":
        color = "#e59400"
        break

      case "java":
        color = "#008080"
        break

      case "angularjs":
        color = "#800000"
        break

      default:
        color = "#222"
    }
    return { color }
  }, [type])

  return <label style={labelStyle}>{type}</label>
}
