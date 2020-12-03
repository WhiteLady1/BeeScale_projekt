import React from 'react';
import { usePersistedState } from '../index';
import { scaleList } from '../index';
import JedenPrehled from './JedenPrehled/JedenPrehled';
import JednaVaha from './JednaVaha/JednaVaha';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margine: 0;
  padding: 0;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  width: 100%;
`;
const Scale = styled.div`
  width: 100%;
  padding-bottom: 30px;
`;

const Prehled = (props) => {
  const [localStorageScaleList, setlocalStorageScaleList] = usePersistedState(
    scaleList,
    'scaleList',
  );

  return (
    <>
      <Wrapper>
        {localStorageScaleList.map((scale) => {
          return (
            <Link to={`/dashboard/${scale.SigfoxID}`}>
              <Scale>
                <JednaVaha key={scale.name} name={scale.name} />
                <JedenPrehled
                  key={scale.SigfoxID}
                  prehled={props.posledniData[scale.SigfoxID]}
                />
              </Scale>
            </Link>
          );
        })}
      </Wrapper>
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
