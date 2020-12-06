import React, { useState } from 'react';
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import SettingsScales from './SettingsScales/SettingsScales';
import SettingsUser from './SettingsUser/SettingsUser';
import GoogleBtn from '../../GoogleBtn/GoogleBtn';
import { ScalesSettings, SettingsLeft, UserSettings, Wrapper } from './style';

const Settings = () => {
  let { path, url } = useRouteMatch();
  const [selected, setSelected] = useState('');

  const handleClick = (choise) => {
    setSelected('');
    switch (choise) {
      case 'scales':
        setSelected('scales');
        break;
      case 'user':
        setSelected('user');
        break;
    }
  };

  return (
    <>
      <Wrapper>
        <SettingsLeft>
          <Link to={`${url}/user`}>
            <UserSettings
              onClick={() => handleClick('user')}
              selected={selected === 'user' ? true : false}
            >
              Nastavení užitatele
            </UserSettings>
          </Link>

          <Link to={`${url}/scales`}>
            <ScalesSettings
              onClick={() => handleClick('scales')}
              selected={selected === 'scales' ? true : false}
            >
              Nastavení vah
            </ScalesSettings>
          </Link>
        </SettingsLeft>
        <GoogleBtn />
      </Wrapper>
      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </>
  );
};
export default Settings;
function Topic() {
  let { topicId } = useParams();
  if (topicId === 'user') {
    return <SettingsUser />;
  }
  return <SettingsScales />;
}
