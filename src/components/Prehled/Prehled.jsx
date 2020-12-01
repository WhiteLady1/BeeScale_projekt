import React from 'react';
import { usePersistedState } from '../index';
import { scaleList } from '../index';
import { Icon } from '@iconify/react';
import weightHanging from '@iconify/icons-fa-solid/weight-hanging';
import tempIcon from '@iconify/icons-raphael/temp';
import humidityIcon from '@iconify/icons-carbon/humidity';
import batteryIcon from '@iconify/icons-fa/battery';
import { Link } from 'react-router-dom';

const JedenPrehled = (props) => {
  console.log('Jeden přehled props.prehled');
  console.log(props.prehled); //zbrazuje ověření id váhy;
  return (
    <>
      <div>
        <p>Údaje k: {props.prehled.time}</p>
        <Icon icon={weightHanging} style={{ fontSize: '20px' }} />
        <div className="hmotnost">{props.prehled.weight}</div>
        <div className="jednotka">kg</div>
      </div>
      <div className="vedlejsiPrehled">
        <div className="hodnoty">
          <Icon icon={tempIcon} style={{ fontSize: '20px' }} />
          <div className="hodnota">{props.prehled.temperatureIn}</div>
          <div className="jednotka">°C</div>
        </div>
        <div className="hodnoty">
          <Icon icon={humidityIcon} style={{ fontSize: '20px' }} />
          <div className="hodnota">{props.prehled.temperatureOut}</div>
          <div className="jednotka">°C</div>
        </div>
        <div className="hodnoty">
          <Icon icon={humidityIcon} style={{ fontSize: '20px' }} />
          <div className="hodnota">{props.prehled.humidity}</div>
          <div className="jednotka">%</div>
        </div>
        <div className="baterie">
          <Icon icon={batteryIcon} style={{ fontSize: '20px' }} />
          <div className="hodnota">{props.prehled.voltage}</div>
          <div className="jednotka">kg</div>
        </div>
      </div>
    </>
  );
};

const JednaVaha = (props) => {
  //console.log(`JednaVaha: ${props}`);
  return (
    <>
      <div className="hlavniPrehled">
        <div className="jmenoVaha">{props.name}</div>
      </div>
    </>
  );
};

const Prehled = (props) => {
  const [localStorageScaleList, setlocalStorageScaleList] = usePersistedState(
    scaleList,
    'scaleList',
  );

  return (
    <>
      <div>Jsem ultra mega vytuněnej přehled :)</div>
      <div className="prehledVah">
        <div className="prehledVahy">
          {localStorageScaleList.map((scale) => {
            return (
              <Link to={`/dashboard/${scale.SigfoxID}`}>
                <JednaVaha key={scale.name} name={scale.name} />
                <JedenPrehled
                  key={scale.SigfoxID}
                  prehled={props.posledniData[scale.SigfoxID]}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Prehled;

/* Ikony baterií
prázdná baterie <Icon icon={battery0} style={{fontSize: '80px'}} />
25 % <Icon icon={battery1} style={{fontSize: '80px'}} />
50 % <Icon icon={battery2} style={{fontSize: '80px'}} />
75 % <Icon icon={battery3} style={{fontSize: '80px'}} />
100% <Icon icon={batteryIcon} style={{fontSize: '80px'}} /> 
*/
