import { Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import InvalidRoutePage from "./components/InvalidRoute"
import Home from "./routes/home"
import Resume from "./routes/resume"

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route component={InvalidRoutePage} />
        </Switch>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
