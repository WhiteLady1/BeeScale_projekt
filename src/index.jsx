import React, { useState } from 'react';
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
import subHours from 'date-fns/subHours';
import { parseDateTime } from './components/Prehled/Dashboard/Graf/Graf';

const App = () => {
  const [timeOffset, setTimeOffset] = useState(24);

  const isInSelectedTimeframe = (dateTime) => {
    const parseTime = parseDateTime(dateTime);
    const today = new Date(2020, 7, 31, 23, 50);
    const selectedTimeFrame = subHours(today, timeOffset);
    //console.log(parseTime > selectedTimeFrame);
    //console.log(parseTime, selectedTimeFrame);
    return parseTime > selectedTimeFrame;
  };

  const transformedData = {};
  data.forEach((item) => {
    if (isInSelectedTimeframe(item.time)) {
      if (!transformedData[item.de6ce]) {
        transformedData[item.de6ce] = [];
      }
      transformedData[item.de6ce].push(item);
    }
  });
  const posledniData = {};
  for (const [id, list] of Object.entries(transformedData)) {
    console.log(list);
    if (!posledniData[id]) {
      console.log(list.lenght, typeof list);
      posledniData[id] = list[list.lenght - 1];
    }
  }
  console.log(posledniData);

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
              <Dashboard
                transformedData={transformedData}
                setTimeOffset={setTimeOffset}
              />
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
