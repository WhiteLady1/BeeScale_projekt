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
        <Logo2 src={logo3} />
        <Logo3 src={logo2} />
        {localStorageScaleList.map((scale) => {
          return (
            <Scale>
              <Link key={scale.SigfoxID} to={`/dashboard/${scale.SigfoxID}`}>
                <OneScale key={scale.name} name={scale.name} />
                <OneOverview
                  key={scale.SigfoxID}
                  overview={props.posledniData[scale.SigfoxID]}
                />
              </Link>
            </Scale>
          );
        })}
      </Wrapper>
    </>
  );
};
export default Overview;
