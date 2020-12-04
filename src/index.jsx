import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { render } from 'react-dom';
import './index.html';
import GlobalStyle from './globalStyle';
import Dashboard from './components/Overview/Dashboard/Dashboard';
import SignIn from './components/mainPage/SignIn/SignIn';
import Registration from './components/mainPage/Registrace/Registration';
import Header from './components/Header/NavBar';
import Settings from './components/Settings/Settings';
import Overview2 from './components/Overview/Overview2';
import data from './components/data/data.js';
import subHours from 'date-fns/subHours';
import { parseDateTime } from './components/Overview/Dashboard/Graf/Graf';
import differenceInHours from 'date-fns/differenceInHours';
import { localStorageToken } from './GoogleBtn/GoogleBtn';
import { scaleList, usePersistedState } from './components/';

const App = () => {
  const [timeOffset, setTimeOffset] = useState(24);
  const [isLogedIn, setisLogedIn] = useState();
  const [localStorageScaleList] = usePersistedState(scaleList, 'scaleList');

  useEffect(() => {
    setisLogedIn(Boolean(localStorage.getItem(localStorageToken)));
  }, []);

  const isInSelectedTimeframe = (dateTime) => {
    const parseTime = parseDateTime(dateTime);
    const today = new Date(2020, 7, 31, 23, 50);
    const selectedTimeFrame = subHours(today, timeOffset);
    return parseTime > selectedTimeFrame;
  };

  const transformedData = {};
  const transformedDataAll = {};

  let lastEnteredDate = '1.1.1970';
  let lastEnteredFullDateWithHours = '1.1.1970 00:00';

  const podminkaA = (val) => timeOffset === 24 * 30 && val !== lastEnteredDate;

  const podminkaB = (val, val2) => {
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
    if (!transformedDataAll[item.de6ce]) {
      transformedDataAll[item.de6ce] = [];
    }
    transformedDataAll[item.de6ce].push(item);
  });

  const posledniData = {};
  localStorageScaleList.map((item) => {
    if (!posledniData[item.SigfoxID]) {
      const list = transformedDataAll[item.SigfoxID];
      if (list) posledniData[item.SigfoxID] = list[list.length - 1];
    }
  });
  return (
    <>
      <GlobalStyle />
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/prehled">
              <Overview2 posledniData={posledniData} />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/dashboard/:id?">
              <Dashboard
                transformedData={transformedData}
                setTimeOffset={setTimeOffset}
                posledniData={posledniData}
              />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/">
              {isLogedIn ? <Redirect to="/prehled" /> : <SignIn />}
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
render(<App />, document.querySelector('#app'));
