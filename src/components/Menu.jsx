import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getData } from './api/data';
import { useLocationDispatch, useLocationState } from './common/contexts';
import Station from './menu/Station';

function Menu({ isWhole }) {
  const { sido, station, apiData } = useLocationState();
  const dispatch = useLocationDispatch();

  const wholeData = async (sido) => {
    try {
      const res = await getData(sido);
      await dispatch({ type: 'apiDataChange', apiData: res });
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  // 페이지 최초 렌더시 API DATA 요청
  useEffect(() => {
    wholeData(sido);
  }, []);

  // 사용자의 시/도 선택이 바뀔 때 마다 실행 할 것
  const sidoChangeHandler = async (value) => {
    dispatch({ type: 'sidoChange', sido: value });
    await wholeData(value).then((res) => {
      dispatch({
        type: 'stationChange',
        station: res[0]['stationName'],
      });
    });
    console.log('station: ', station);
  };

  // 사용자의 측정소 선택이 바뀔 때 마다 실행 할 것
  const stationChangeHandler = async (value) => {
    await dispatch({ type: 'stationChange', station: value });
  };

  return (
    <>
      <Container>
        <select
          value={sido}
          name='sidoChoice'
          id='sidoChoice'
          onChange={(e) => sidoChangeHandler(e.target.value)}
        >
          <option value='서울'>서울</option>
          <option value='부산'>부산</option>
          <option value='대구'>대구</option>
          <option value='인천'>인천</option>
          <option value='광주'>광주</option>
          <option value='대전'>대전</option>
          <option value='울산'>울산</option>
          <option value='경기'>경기</option>
          <option value='강원'>강원</option>
          <option value='충북'>충북</option>
          <option value='충남'>충남</option>
          <option value='전북'>전북</option>
          <option value='전남'>전남</option>
          <option value='경북'>경북</option>
          <option value='경남'>경남</option>
          <option value='제주'>제주</option>
        </select>
        {isWhole ? null : (
          <select
            name='stationChoice'
            id='stationChoice'
            onChange={(e) => stationChangeHandler(e.target.value)}
            value={station}
          >
            {apiData.map((data) => {
              const { stationName } = data;
              return <Station key={stationName} station={stationName} />;
            })}
          </select>
        )}
      </Container>
    </>
  );
}
export default Menu;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;

  select {
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 10px;
    text-align: center;
  }
`;
