import React from 'react';
import data from '../../data/data';

const transformedData = {};
data.forEach((item) => {
  if (!transformedData[item.de6ce]) {
    transformedData[item.de6ce] = [];
  }
  transformedData[item.de6ce].push(item);
});
const scalesList = Object.keys(transformedData);

const SettingsScales = () => {
  return (
    <div className="settingsScale">
      <ul>
        {scalesList.map((scale) => {
          return (
            <li key={scale}>
              <form>
                {scale}
                <br />
                <label>
                  Jméno:
                  <input />
                </label>
                <label>
                  Město nebo obec: <input />
                </label>
                <button>Uložit změny</button>
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SettingsScales;
