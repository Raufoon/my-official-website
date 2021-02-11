import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import InvalidRoutePage from './components/InvalidRoute'
import { SettingsContext, useSettings } from './settings'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'
import Footer from './components/Footer'

const Home = lazy(() => import('./routes/home'))
const ProjectPage = lazy(() => import('./routes/projects/ProjectPage'))
const Resume = lazy(() => import('./routes/resume'))
const Projects = lazy(() => import('./routes/projects'))

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
            <Route path="/projects/:id" component={ProjectPage} />
            <Route exact path="/projects" component={Projects} />
            <Route component={InvalidRoutePage} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </SettingsContext.Provider>
  )
}

export default App
