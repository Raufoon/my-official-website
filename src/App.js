import { Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import InvalidRoutePage from "./components/InvalidRoute"
import { SettingsContext, useSettings } from "./settings"
import { lazy, Suspense } from "react"
import Loader from "./components/Loader"

const Home = lazy(() => import("./routes/home"))
const Resume = lazy(() => import("./routes/resume"))
const Projects = lazy(() => import("./routes/projects"))

function App() {
  const settings = useSettings()

  return (
    <SettingsContext.Provider value={settings}>
      <Header />
      <main>
        <Suspense fallback={<Loader center={true} />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route component={InvalidRoutePage} />
          </Switch>
        </Suspense>
      </main>
      <footer></footer>
    </SettingsContext.Provider>
  )
}

export default App
