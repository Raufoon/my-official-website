import useAppSettings from "./hooks/useAppSettings"
import { Route, Switch } from "react-router-dom"
import { SettingsContext } from "./contexts"
import AppHeader from "./components/AppHeader"
import Footer from "./components/Footer"
import { lazy, Suspense, useLayoutEffect } from "react"
import Loader from "./components/Loader"
import ErrorBoundary from "./components/ErrorBoundary"

const Home = lazy(() => import("./routes/home"))
const Resume = lazy(() => import("./routes/resume"))
const ProjectPage = lazy(() => import("./routes/project-page"))
const Projects = lazy(() => import("./routes/projects"))

function App() {
  const appSettings = useAppSettings()

  useLayoutEffect(
    function initAppVisualFromSettings() {
      document.body.classList.remove(
        appSettings.theme === "dark" ? "light" : "dark"
      )
      document.body.classList.add(appSettings.theme)
    },
    [appSettings.theme]
  )

  return (
    <SettingsContext.Provider value={appSettings}>
      <AppHeader />

      <ErrorBoundary errorMsg={"Failed to load the route"}>
        <main id="app-main">
          <Suspense fallback={<Loader center={true} />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/resume" component={Resume} />
              <Route path="/projects/:id" component={ProjectPage} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </Suspense>
        </main>
      </ErrorBoundary>

      <Footer />
    </SettingsContext.Provider>
  )
}

export default App
