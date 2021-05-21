import { Component } from "react"

type EBState = {
  hasError: boolean
  error?: Error
}

type EBProps = {
  errorMsg?: string
}

const errorCardStyle = {
  padding: "1rem",
  backgroundColor: "var(--color-2)",
  fontSize: "small",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export default class ErrorBoundary extends Component<EBProps, EBState> {
  constructor(props: EBProps) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    }
  }

  render() {
    if (this.state.hasError)
      return <b style={errorCardStyle}>{this.props.errorMsg}</b>
    return this.props.children
  }
}
