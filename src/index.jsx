import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import MainPage from './MainPage/MainPage';
import Dashboard from './Dashboard/Dashboard';
import Header from './Header/header';

const App = () => {
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
