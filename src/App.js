import { Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import InvalidRoutePage from "./components/InvalidRoute"
import Home from "./routes/home"

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={InvalidRoutePage} />
        </Switch>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
