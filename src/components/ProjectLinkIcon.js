import { ReactComponent as GithubIcon } from "../assets/icons/github.svg"
import { ReactComponent as DownloadIcon } from "../assets/icons/download3.svg"
import { ReactComponent as WebsiteIcon } from "../assets/icons/earth.svg"

export default function ProjectLinkIcon({ type }) {
  switch (type) {
    case "github":
      return <GithubIcon />
    case "website":
      return <WebsiteIcon />
    case "download":
      return <DownloadIcon />
    default:
      throw new Error("Unsupported project type")
  }
}
