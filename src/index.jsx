import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import Dashboard from './components/Prehled/Dashboard/Dashboard';
import SignIn from './components/MainPage/SignIn/signIn';
import Registration from './components/MainPage/Registrace/registration';
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
    return parseTime > selectedTimeFrame;
  };

  const transformedData = {};
  let lastEnteredDate = '';
  data.forEach((item) => {
    if (isInSelectedTimeframe(item.time)) {
      const currentDate = item.time.split(' ')[0];
      //porovnáváš item.time (1.8.2020) jestli je už v transformData vůči lastEnteredDate
      console.log(currentDate, lastEnteredDate);
      if (currentDate !== lastEnteredDate) {
        if (!transformedData[item.de6ce]) {
          transformedData[item.de6ce] = [];
        }
        transformedData[item.de6ce].push(item);
        lastEnteredDate = currentDate;
      }
    }
  });

  const posledniData = {};
  for (const [id, list] of Object.entries(transformedData)) {
    if (!posledniData[id]) {
      posledniData[id] = list[list.lenght - 1];
    }
  }

  return (
    <>
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path="/prehled">
              <Prehled posledniData={posledniData} />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/dashboard/:id?">
              <Dashboard
                transformedData={transformedData}
                setTimeOffset={setTimeOffset}
              />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));
