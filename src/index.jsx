import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import MainPage from './MainPage/MainPage';
import Dashboard from './Dashboard/Dashboard';
import Header from './Header/header';
import data from './data/data.js';

const App = () => {
  const uniqID = [...new Set(data.map((ids) => ids.device))];
  console.log(uniqID);

  return (
    <>
      <Router>
        <div>
          <Header />

          <Switch>
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
