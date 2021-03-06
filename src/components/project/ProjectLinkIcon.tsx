import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg"
import { ReactComponent as DownloadIcon } from "../../assets/icons/download3.svg"
import { ReactComponent as DownloadLinuxIcon } from "../../assets/icons/tux.svg"
import { ReactComponent as DownloadWindowsIcon } from "../../assets/icons/windows8.svg"
import { ReactComponent as WebsiteIcon } from "../../assets/icons/earth.svg"
import { ReactComponent as DocumentIcon } from "../../assets/icons/attachment.svg"
import { ReactComponent as DockerIcon } from "../../assets/icons/docker.svg"

interface Props {
  type: string
}

export default function ProjectLinkIcon({ type }: Props) {
  switch (type) {
    case "github":
      return <GithubIcon />
    case "website":
      return <WebsiteIcon />
    case "download":
      return <DownloadIcon />
    case "download (linux)":
      return <DownloadLinuxIcon />
    case "download (win64)":
      return <DownloadWindowsIcon />
    case "document":
      return <DocumentIcon />
    case "docker":
      return <DockerIcon />
    default:
      throw new Error("Unsupported project link type")
  }
}
