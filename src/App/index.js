import React, {lazy, Suspense} from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Responsive from './components/Responsive';
import './style.css';

const AboutMe = lazy(() => import('./routes/AboutMe'));

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <div className="content">
        <Responsive screens={[Responsive.MEDIUM_SCREEN, Responsive.LARGE_SCREEN]}>
          <nav className="navDesktop">
            <NavLink exact to={'/'} active="active">Me</NavLink>
            <NavLink to={'/projects'} active="active">Projects</NavLink>
            <NavLink to={'/resume'} active="active">Resume</NavLink>
          </nav>

          <main className="contentDesktop">
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                <Route exact path='/' component={AboutMe}></Route>
              </Switch>
            </Suspense>
          </main>

          <div className="notices">
            NNNNNN
          </div>
        </Responsive>
      </div>
    </div>
  );
}

export default App;
