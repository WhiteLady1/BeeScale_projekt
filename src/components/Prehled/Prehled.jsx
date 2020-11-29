import React from 'react';
import { usePersistedState } from '../index';
import { scaleList } from '../index';
import { Icon } from '@iconify/react';
import weightHanging from '@iconify/icons-fa-solid/weight-hanging';
import tempIcon from '@iconify/icons-raphael/temp';
import humidityIcon from '@iconify/icons-carbon/humidity';
import batteryIcon from '@iconify/icons-fa/battery';

const JedenPrehled = (props) => {
  return <></>;
};

const JednaVaha = (props) => {
  console.log(`JednaVaha: ${props}`);
  return (
    <>
      <div className="hlavniPrehled">
        <div className="jmenoVaha">{props.name}</div>
        <Icon icon={weightHanging} style={{ fontSize: '71px' }} />
        <div className="hmotnost">{56}</div>
        <div className="jednotka">kg</div>
      </div>
      <div className="vedlejsiPrehled">
        <div className="hodnoty">
          <Icon icon={tempIcon} style={{ fontSize: '82px' }} />
          <div className="hodnota">56</div>
          <div className="jednotka">°C</div>
        </div>
        <div className="hodnoty">
          <Icon icon={humidityIcon} style={{ fontSize: '82px' }} />
          <div className="hodnota">56</div>
          <div className="jednotka">°C</div>
        </div>
        <div className="hodnoty">
          <Icon icon={humidityIcon} style={{ fontSize: '82px' }} />
          <div className="hodnota">56</div>
          <div className="jednotka">%</div>
        </div>
        <div className="baterie">
          <Icon icon={batteryIcon} style={{ fontSize: '80px' }} />
          <div className="hodnota">56</div>
          <div className="jednotka">kg</div>
        </div>
      </div>
    </>
  );
};

const Prehled = () => {
  const [scaleId, setScaleId] = usePersistedState(scaleList, 'scaleList');

  return (
    <>
      <div>Jsem ultra mega vytuněnej přehled :)</div>
      <div className="prehledVah">
        <div className="prehledVahy">
          {console.log(`Přehled před map ${scaleId[0].name}`)}
          {scaleId.map((e) => {
            console.log(`Přehlev map ${e}`);
            return <JednaVaha name={e.name} />;
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
