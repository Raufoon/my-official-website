import useAppSettings from './hooks/useAppSettings'
import { Route, Switch } from 'react-router-dom'
import { SettingsContext } from './contexts'
import AppHeader from './components/AppHeader'
import Footer from './components/Footer'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'

const Home = lazy(() => import('./routes/home'))
const Resume = lazy(() => import('./routes/resume'))
const ProjectPage = lazy(() => import('./routes/projects/ProjectPage'))
const Projects = lazy(() => import('./routes/projects'))

function App() {
  const appSettings = useAppSettings()

  return (
    <SettingsContext.Provider value={appSettings}>
      <AppHeader />

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

      <Footer />
    </SettingsContext.Provider>
  )
}

export default App
