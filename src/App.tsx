import useAppSettings from './hooks/useAppSettings'
import { SettingsContext }from './contexts'
import AppHeader from './components/AppHeader';

function App() {
  const appSettings = useAppSettings()

  return (
    <SettingsContext.Provider value={appSettings}>
      <AppHeader/>
      <main></main>
    </SettingsContext.Provider>
  );
}

export default App;
