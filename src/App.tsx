import useAppSettings from './hooks/useAppSettings'
import { Route, Switch } from 'react-router-dom'
import { SettingsContext }from './contexts'
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'

const Home = lazy(() => import('./routes/home'))

function App() {
  const appSettings = useAppSettings()

  return (
    <SettingsContext.Provider value={appSettings}>
      <AppHeader/>
      <main>
      <Suspense fallback={<Loader center={true} />}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
      </main>
      <Footer/>
    </SettingsContext.Provider>
  );
}

export default App;
