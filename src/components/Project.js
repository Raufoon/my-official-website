import { useContext, useMemo } from "react"
import { SettingsContext } from "../settings"
import useFetchFromDB from "../useFetchFromDB"
import FullStackTemplate from "./project-templates/FullStackTemplate"
import styles from "./Project.module.css"

export default function Project({ project }) {
  const { id, type } = project

  const typeString = useMemo(() => {
    return type.replace(/-/g, " ")
  }, [type])

  const { settings } = useContext(SettingsContext)

  const { isFetching, hasError, ...rest } = useFetchFromDB(
    `${settings.lang}/myprojects/${id}`
  )

  if (isFetching || hasError) return false

  let Template = undefined
  switch (type) {
    case "full-stack-web":
      Template = FullStackTemplate
      break
    default:
      throw new Error("Unsupported project type")
  }

  return (
    <Template
      {...project}
      {...rest}
      type={typeString}
      desktopImages={project.photos[0]}
      mobileImages={undefined}
    />
  )
}
