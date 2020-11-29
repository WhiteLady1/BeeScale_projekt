import React from 'react';
import { usePersistedState } from '../../index';
import scaleList from '../../index';

/*const transformedData = {};
data.forEach((item) => {
  if (!transformedData[item.de6ce]) {
    transformedData[item.de6ce] = [];
  }
  transformedData[item.de6ce].push(item);
});*/

const SettingsScales = () => {
  const [scaleId, setScaleId] = usePersistedState(scaleList, 'scaleList');
  return (
    <div className="settingsScale">
      <ul>
        {scaleId.map((scale) => {
          return (
            <li key={scale.SigfoxID}>
              <form>
                {scale.SigfoxID}
                <br />
                <label>
                  Jméno:
                  <input value={scale.name} />
                </label>
                <label>
                  Město nebo obec: <input value={scale.city} />
                </label>
                <button onClick={() => {}}>Uložit změny</button>
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SettingsScales;
