import { ReactComponent as LoaderAnimation } from "../assets/animations/loader.svg"
import "./Loader.css"

export default function Loader({ center }) {
  return <LoaderAnimation className={`Loader ${center ? "centerized" : ""}`} />
}
