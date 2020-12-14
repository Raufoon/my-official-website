import { Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import InvalidRoutePage from "./components/InvalidRoute"
import { SettingsContext, useSettings } from "./settings"
import Home from "./routes/home"
import Resume from "./routes/resume"

function App() {
  const settings = useSettings()

  return (
    <SettingsContext.Provider value={settings}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route component={InvalidRoutePage} />
        </Switch>
      </main>
      <footer></footer>
    </SettingsContext.Provider>
  )
}

export default App
