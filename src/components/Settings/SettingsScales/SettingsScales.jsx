import React, { useState } from 'react';
import { usePersistedState } from '../../index';
import { scaleList, newEmptyScale } from '../../index';

/*const transformedData = {};
data.forEach((item) => {
  if (!transformedData[item.de6ce]) {
    transformedData[item.de6ce] = [];
  }
  transformedData[item.de6ce].push(item);
});*/

const SettingsScales = () => {
  const [localStorageScaleList, setlocalStorageScaleList] = usePersistedState(
    scaleList,
    'scaleList',
  );
  const [formState, setFormState] = useState(localStorageScaleList);

  return (
    <div className="settingsScale">
      <form>
        <ul>
          {formState.map((scale, i) => {
            return (
              <li key={i}>
                <label>
                  ID Váhy:
                  <input
                    value={scale.SigfoxID}
                    onChange={(e) => {
                      //e.preventDefault();
                      const newFormState = [...formState];
                      const newScaleValue = { ...scale };
                      newScaleValue.SigfoxID = e.target.value;
                      newFormState[i] = newScaleValue;
                      setFormState(newFormState);
                    }}
                  />
                </label>
                <br />
                <label>
                  Jméno:
                  <input
                    value={scale.name}
                    onChange={(e) => {
                      e.preventDefault();
                      const newFormState = [...formState];
                      const newScaleValue = { ...scale };
                      newScaleValue.name = e.target.value;
                      newFormState[i] = newScaleValue;
                      setFormState(newFormState);
                    }}
                  />
                </label>
                <label>
                  Město nebo obec:{' '}
                  <input
                    value={scale.city}
                    onChange={(e) => {
                      e.preventDefault();
                      const newFormState = [...formState];
                      const newScaleValue = { ...scale };
                      newScaleValue.city = e.target.value;
                      newFormState[i] = newScaleValue;
                      setFormState(newFormState);
                    }}
                  />
                </label>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            setlocalStorageScaleList(formState);
          }}
        >
          Uložit změny
        </button>
        <button
          onClick={() => {
            const newFormState = [...formState];
            newFormState.push(newEmptyScale);
            setFormState(newFormState);
          }}
        >
          Přdat váhu
        </button>
      </form>
    </div>
  );
};
export default SettingsScales;
