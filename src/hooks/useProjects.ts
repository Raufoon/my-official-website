import { useContext, useEffect, useMemo, useState } from "react"
import { SettingsContext } from "../contexts"
import { AppSettings, Project, SocialLink } from "../global-types"
import useFetchListFromDB from "./useFetchListFromDB"

type ProjectDescription = {
  id: string
  title: string
  subtitle: string
}

type ProjectMetadata = {
  id: string
  type: string
  priority: number
  technologies: Array<string>
  links: Array<SocialLink>
  photos?: Array<string>
  video?: string
}

export default function useProjects() {
  const {
    isFetching: isProjectMetadatasFetching,
    hasError: hasProjectMetadatasError,
    list: projectMetadatas,
  } = useFetchListFromDB<ProjectMetadata>("projects")

  const settings: AppSettings = useContext(SettingsContext)

  const {
    isFetching: isProjectDescriptionsFetching,
    hasError: hasProjectDescriptionsError,
    list: projectDescriptions,
  } = useFetchListFromDB<ProjectDescription>(`${settings.lang}/projects`)

  const isFetching = isProjectDescriptionsFetching || isProjectMetadatasFetching

  const hasError = hasProjectMetadatasError || hasProjectDescriptionsError

  const isReady = !(isFetching || hasError)

  const [projects, setProjects] = useState([] as Project[])

  useEffect(() => {
    if (isReady) {
      setProjects(
        projectMetadatas.map((metadata: ProjectMetadata) => {
          const description = projectDescriptions.find(
            (desc) => desc.id === metadata.id
          )

          if (!description)
            return {
              ...metadata,
              title: "",
              subtitle: "",
            }

          return {
            ...metadata,
            ...description,
          }
        })
      )
    }
  }, [isReady, projectMetadatas, projectDescriptions])

  const data = useMemo(
    () => ({ isFetching, hasError, projects }),
    [isFetching, hasError, projects]
  )

  return data
}
