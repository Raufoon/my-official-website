import { useMemo } from "react"

interface Props {
  type: string
  children?: any
}

export default function TechLabel({ type, children }: Props) {
  const labelStyle = useMemo(() => {
    let color = "#222"

    switch (type.toLowerCase()) {
      case "react.js":
        color = "#045463"
        break

      case "javascript":
      case "c++":
      case "assembly-language":
      case "java":
      case "python":
        color = "#e57300"
        break

      case "graphql":
      case "firebase":
      case "docker":
      case "postgresql":
        color = "#9c5f4b"
        break

      case "express.js":
      case "angularjs":
      case "next.js":
      case "django":
        color = "#14755d"
        break

      default:
        color = "gray"
    }
    return {
      color,
    }
  }, [type])

  return <label style={labelStyle}>{children || type}</label>
}
