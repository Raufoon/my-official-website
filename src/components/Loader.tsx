import { ReactComponent as LoaderAnimation } from "../assets/animations/loader.svg"
import "./Loader.css"

interface Props {
  center?: boolean
}

export default function Loader(props: Props) {
  const { center } = props
  return <LoaderAnimation className={`Loader ${center ? "centerized" : ""}`} />
}
