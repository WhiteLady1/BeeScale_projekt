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
import differenceInHours from 'date-fns/differenceInHours';

const App = () => {
  const [timeOffset, setTimeOffset] = useState(24);

  const isInSelectedTimeframe = (dateTime) => {
    const parseTime = parseDateTime(dateTime);
    const today = new Date(2020, 7, 31, 23, 50);
    const selectedTimeFrame = subHours(today, timeOffset);
    return parseTime > selectedTimeFrame;
  };

  const transformedData = {};
  let lastEnteredDate = '1.1.1970';
  let lastEnteredFullDateWithHours = '1.1.1970 00:00';
  const podminkaA = (val) => timeOffset === 24 * 30 && val !== lastEnteredDate;
  const podminkaB = (val, val2) => {
    //console.log(differenceInHours(parseDateTime(val), parseDateTime(val2)));
    const difference = differenceInHours(
      parseDateTime(val),
      parseDateTime(val2),
    );
    return timeOffset === 24 * 7 && difference > 6;
  };
  const podminkaC = (val, val2) => {
    const difference = differenceInHours(
      parseDateTime(val),
      parseDateTime(val2),
    );
    return timeOffset === 48 && difference > 3;
  };

  const podminkaD = (val, val2) => {
    const difference = differenceInHours(
      parseDateTime(val),
      parseDateTime(val2),
    );
    return timeOffset === 24 && difference > 1;
  };

  data.forEach((item) => {
    if (isInSelectedTimeframe(item.time)) {
      const currentDate = item.time.split(' ')[0];
      if (
        podminkaA(currentDate) ||
        podminkaB(item.time, lastEnteredFullDateWithHours) ||
        podminkaC(item.time, lastEnteredFullDateWithHours) ||
        podminkaD(item.time, lastEnteredFullDateWithHours)
      ) {
        if (!transformedData[item.de6ce]) {
          transformedData[item.de6ce] = [];
        }
        transformedData[item.de6ce].push(item);
        lastEnteredDate = currentDate;
        lastEnteredFullDateWithHours = item.time;
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
