import useAppSettings from './hooks/useAppSettings'
import { SettingsContext }from './contexts'

function App() {
  const appSettings = useAppSettings()

  return (
    <SettingsContext.Provider value={appSettings}>
      <main></main>
    </SettingsContext.Provider>
  );
}

export default App;
