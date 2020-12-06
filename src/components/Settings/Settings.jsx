import React from 'react';
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
  return (
    <>
      <Wrapper>
        <SettingsLeft>
          <UserSettings>
            <Link to={`${url}/user`}>Nastavení užitatele</Link>
          </UserSettings>
          <ScalesSettings>
            <Link to={`${url}/scales`}>Nastavení vah</Link>
          </ScalesSettings>
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
