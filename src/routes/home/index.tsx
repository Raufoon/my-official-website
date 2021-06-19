import styles from "./index.module.scss"
import useFetchFromDB from "../../hooks/useFetchFromDB"
import useFetchListFromDB from "../../hooks/useFetchListFromDB"
import { useContext } from "react"
import { SettingsContext } from "../../contexts"
import Loader from "../../components/Loader"
import {
  AboutMe,
  AppSettings,
  Skill,
  Education,
  JobExperience,
  CareerInterest,
} from "../../global-types"
import Introduction from "./Introduction"
import CareerInterestSection from "./CareerInterest"
import EducationHistorySection from "./EducationHistory"
import SkillSection from "./SkillSection"
import JobExperiencesSection from "./JobExperiences"

export default function Home() {
  const settings: AppSettings = useContext(SettingsContext)

  const { data: aboutMe, isFetching: isAboutFetching } =
    useFetchFromDB<AboutMe>(`${settings.lang}/me`)

  const { list: photos, isFetching: isPhotosFetching } =
    useFetchListFromDB<string>(`photos`)

  const { list: skills, isFetching: isSkillsFetching } =
    useFetchListFromDB<Skill>(`skills`)

  const { list: careerInterests, isFetching: isCareerInterestFetching } =
    useFetchListFromDB<CareerInterest>(`${settings.lang}/careerInterests`)

  const { list: educationHistory, isFetching: isEducationHistoryFetching } =
    useFetchListFromDB<Education>(`${settings.lang}/educationHistory`)

  const { list: workHistory, isFetching: isWorkHistoryFetching } =
    useFetchListFromDB<JobExperience>(`${settings.lang}/workHistory`)

  if (
    isAboutFetching ||
    isPhotosFetching ||
    isSkillsFetching ||
    isCareerInterestFetching ||
    isEducationHistoryFetching ||
    isWorkHistoryFetching
  )
    return <Loader />

  const { subtitle, summary }: AboutMe = aboutMe

  return (
    <main className={styles.Home}>
      <Introduction subtitle={subtitle} photos={photos} summary={summary} />

      <section className={styles.qualificationSection}>
        <JobExperiencesSection history={workHistory} />
        <EducationHistorySection history={educationHistory} />
        <SkillSection skills={skills} />
        <CareerInterestSection interests={careerInterests} />
      </section>
    </main>
  )
}
