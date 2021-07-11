import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { SettingsContext } from "../contexts"
import { AppSettings, Project, SocialLink } from "../global-types"
import { intersects } from "../routes/projects/utils"
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

  const [filteredProjects, setFilteredProjects] = useState([] as Project[])

  const [availableTypes, setAvailableTypes] = useState([] as string[])

  const [availableTechs, setAvailableTechs] = useState([] as string[])

  const [typeFrequencies, setTypeFrequencies] = useState(
    new Map<string, number>()
  )

  const [techFrequencies, setTechFrequencies] = useState(
    new Map<string, number>()
  )

  useEffect(() => {
    if (isReady) {
      const typeOccurances = projectMetadatas.map((pm) => pm.type)

      setTypeFrequencies((prevMap) => {
        const map = new Map(prevMap)

        typeOccurances.forEach((type) => {
          const freq = map.get(type)
          if (freq) map.set(type, freq + 1)
          else map.set(type, 1)
        })

        return map
      })

      setAvailableTypes(Array.from(new Set(typeOccurances)))

      const techOccurances = projectMetadatas
        .map((pm) => pm.technologies)
        .flat()

      setTechFrequencies((prevMap) => {
        const map = new Map(prevMap)

        techOccurances.forEach((type) => {
          const freq = map.get(type)
          if (freq) map.set(type, freq + 1)
          else map.set(type, 1)
        })

        return map
      })

      setAvailableTechs(Array.from(new Set(techOccurances)))

      const allProjects = projectMetadatas.map((metadata: ProjectMetadata) => {
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

      setProjects(allProjects)

      setFilteredProjects(allProjects)
    }
  }, [isReady, projectMetadatas, projectDescriptions])

  const filter = useCallback(
    (type, techs) => {
      setFilteredProjects(
        projects
          .filter((p) => !type || p.type === type)
          .filter(
            (p) => techs.length === 0 || intersects(techs, p.technologies)
          )
      )
    },
    [projects]
  )

  const data = useMemo(
    () => ({
      isFetching,
      hasError,
      projects,
      availableTypes,
      typeFrequencies,
      availableTechs,
      techFrequencies,
      filteredProjects,
      filter,
    }),
    [
      isFetching,
      hasError,
      projects,
      availableTypes,
      typeFrequencies,
      availableTechs,
      techFrequencies,
      filteredProjects,
      filter,
    ]
  )

  return data
}
