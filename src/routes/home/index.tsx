import styles from "./index.module.css"
import useFetchFromDB from "../../hooks/useFetchFromDB"
import useFetchListFromDB from "../../hooks/useFetchListFromDB"
import { useContext } from "react"
import { SettingsContext } from "../../contexts"
import Loader from "../../components/Loader"
import { AboutMe, AppSettings, Skill } from "../../global-types"
import Introduction from "./Introduction"
import CareerInterest from "./CareerInterest"
import EducationHistory from "./EducationHistory"
import SkillSection from "./SkillSection"
import JobExperiences from "./JobExperiences"

export default function Home() {
  const settings: AppSettings = useContext(SettingsContext)

  const { data: aboutMe, isFetching: isAboutFetching } =
    useFetchFromDB<AboutMe>(`${settings.lang}/me`)

  const { list: photos, isFetching: isPhotosFetching } =
    useFetchListFromDB<string>(`photos`)

  const { list: skills, isFetching: isSkillsFetching } =
    useFetchListFromDB<Skill>(`skills`)

  if (isAboutFetching || isPhotosFetching || isSkillsFetching) return <Loader />

  const {
    subtitle,
    educationHistory,
    summary,
    careerInterests,
    workHistory,
  }: AboutMe = aboutMe

  console.log(aboutMe)

  return (
    <main className={styles.Home}>
      <Introduction subtitle={subtitle} photos={photos} summary={summary} />

      <section className={styles.qualificationSection}>
        <JobExperiences history={workHistory} />
        <EducationHistory history={educationHistory} />
        <SkillSection skills={skills} />
        <CareerInterest interests={careerInterests} />
      </section>
    </main>
  )
}
