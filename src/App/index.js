import React, {lazy, Suspense} from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Responsive from './components/Responsive';
import './style.css';

const AboutMe = lazy(() => import('./routes/AboutMe'));
const NoticeBoard = lazy(() => import('./routes/NoticeBoard'));
const ResumePage = lazy(() => import('./routes/ResumePage'));
const Projects = lazy(() => import('./routes/Projects'));

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
            <Suspense fallback={<div>LOADING...</div>}>
              <Switch>
                <Route exact path='/' component={AboutMe}></Route>
                <Route exact path='/resume' component={ResumePage}></Route>
                <Route exact path='/projects/:id?' component={Projects}></Route>
              </Switch>
            </Suspense>
          </main>

          <Suspense fallback={<div>LOADING...</div>}>
            <NoticeBoard className="notices"/>
          </Suspense>
        </Responsive>
      </div>
    </div>
  );
}

export default App;
