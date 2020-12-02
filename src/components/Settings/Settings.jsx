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
const Settings = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <h2>Nastavení</h2>
      <div>
        <ul>
          <li>
            <Link to={`${url}/user`}>Nastavení užitatele</Link>
          </li>
          <li>
            <Link to={`${url}/scales`}>Nastavení vah</Link>
          </li>
        </ul>
      </div>
      <GoogleBtn />
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
