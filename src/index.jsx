import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import MainPage from './MainPage/MainPage';
import Dashboard from './Dashboard/Dashboard';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <nav className="nav-test">
            <ul>
              <li>
                <Link to="/">Main page</Link>
              </li>
              <li>
                <Link to="/dashbord">Dashboard</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/dashbord">
              <Dashboard />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));
