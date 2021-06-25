import React from 'react';
import { usePersistedState } from '../index';
import { scaleList } from '../index';
import OneOverview from './OneOverview/OneOverview';
import OneScale from './OneScale/OneScale';
import { Link } from 'react-router-dom';
import { Scale, Wrapper } from './overviewStyle';
import logo2 from '../logo_2.svg';
import logo3 from '../logo_3.svg';
import { Logo2, Logo3 } from '../../globalStyle';

const Overview = (props) => {
  const [localStorageScaleList, setlocalStorageScaleList] = usePersistedState(
    scaleList,
    'scaleList',
  );

  return (
    <>
      <Wrapper>
        <Logo2 src={logo2} />
        <Logo3 src={logo3} />
        {localStorageScaleList.map((scale) => {
          return (
            <Link key={scale.SigfoxID} to={`/dashboard/${scale.SigfoxID}`}>
              <Scale>
                <OneScale key={scale.name} name={scale.name} />
                <OneOverview
                  key={scale.SigfoxID}
                  overview={props.posledniData[scale.SigfoxID]}
                />
              </Scale>
            </Link>
          );
        })}
      </Wrapper>
    </>
  );
};
export default Overview;

/* Ikony baterií
prázdná baterie <Icon icon={battery0} style={{fontSize: '80px'}} />
25 % <Icon icon={battery1} style={{fontSize: '80px'}} />
50 % <Icon icon={battery2} style={{fontSize: '80px'}} />
75 % <Icon icon={battery3} style={{fontSize: '80px'}} />
100% <Icon icon={batteryIcon} style={{fontSize: '80px'}} /> 
*/
