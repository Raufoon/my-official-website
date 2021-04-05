import useAppSettings from './hooks/useAppSettings'
import { SettingsContext }from './contexts'
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';

function App() {
  const appSettings = useAppSettings()

  return (
    <SettingsContext.Provider value={appSettings}>
      <AppHeader/>
      <main></main>
      <Footer/>
    </SettingsContext.Provider>
  );
}

export default App;
