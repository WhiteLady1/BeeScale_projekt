import React from 'react';
import { usePersistedState } from '../index';
import { scaleList } from '../index';
import JedenPrehled from './JedenPrehled/JedenPrehled';
import JednaVaha from './JednaVaha/JednaVaha';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-evenly;
  width: 100%;
  @media (min-width: 600px) {
    align-items: center;
  }
`;
const Scale = styled.div`
  margin: 20px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 320px;
  height: 377px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
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
