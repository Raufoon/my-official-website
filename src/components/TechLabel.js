import { useMemo } from "react"

export default function TechLabel({ type, children }) {
  const labelStyle = useMemo(() => {
    let color = "#222"
    switch (type.toLowerCase()) {
      case "redux.js":
        color = "#392897"
        break

      case "express.js":
        color = "#006900"
        break

      case "react.js":
        color = "#045463"
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
        color = "#b80505"
        break

      case "postgresql":
        color = "#0000ff"
        break

      case "django":
        color = "#14755d"
        break

      default:
        color = "gray"
    }
    return {
      color,
      fontSize: "16px",
      fontFamily: "monospace",
    }
  }, [type])

  return <label style={labelStyle}>{children || type}</label>
}
