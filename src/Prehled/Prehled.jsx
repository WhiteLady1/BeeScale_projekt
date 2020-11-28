import React from 'react';
import { Icon } from '@iconify/react';
import weightHanging from '@iconify/icons-fa-solid/weight-hanging';
import tempIcon from '@iconify/icons-raphael/temp';
import energyIcon from '@iconify/icons-simple-line-icons/energy';
import humidityIcon from '@iconify/icons-carbon/humidity';

const Prehled = () => {
  return (
    <>
      <div>Jsem ultra mega vytuněnej přehled :)</div>
      <div className="prehledVah">
        <div className="prehledVahy">
          <div className="hlavniPrehled">
            <div className="jmenoVaha">Moje váha</div>
            <Icon icon={weightHanging} style={{ fontSize: '71px' }} />
            <div className="hmotnost">56</div>
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
              <Icon icon={energyIcon} style={{ fontSize: '71px' }} />
              <div className="hodnota">56</div>
              <div className="jednotka">kg</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Prehled;
