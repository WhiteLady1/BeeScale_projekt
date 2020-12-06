import React, { useState } from 'react';
import { usePersistedState } from '../../index';
import { scaleList, newEmptyScale } from '../../index';
import { Form, Input, Label, Ul, Div } from './style';

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
      <Form>
        <Ul>
          {formState.map((scale, i) => {
            return (
              <li key={i}>
                <Div>
                  <Label>
                    ID Váhy:
                    <Input
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
                  </Label>
                </Div>
                <Div>
                  <Label>
                    Jméno Váhy:
                    <Input
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
                  </Label>
                </Div>
                <Div>
                  <Label>
                    Město nebo obec:{' '}
                    <Input
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
                  </Label>
                </Div>
              </li>
            );
          })}
        </Ul>
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
          Přidat váhu
        </button>
      </Form>
    </div>
  );
};
export default SettingsScales;
