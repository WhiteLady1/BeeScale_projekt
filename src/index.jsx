import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import Dashboard from './components/Prehled/Dashboard/Dashboard';
import MainPage from './components/mainPage/signIn';
import Header from './components/Header/header';
import Settings from './components/Settings/Settings';
import Prehled from './components/Prehled/Prehled';
import data from './components/data/data.js';

const App = () => {
  const uniqID = [...new Set(data.map((ids) => ids.device))];
  console.log(uniqID);

  return (
    <>
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path="/prehled">
              <Prehled />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/dashboard">
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
