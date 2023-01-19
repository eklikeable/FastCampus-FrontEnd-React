import React from 'react';
import styled from 'styled-components';
import { useLocationDispatch, useLocationState } from './common/contexts';
import { FaRegStar, FaStar } from 'react-icons/fa';

function Card() {
  const { sido, station, apiData, favorite } = useLocationState();
  const dispatch = useLocationDispatch();

  let pm10Value, dataTime;
  apiData.forEach((data) => {
    if (data['stationName'] === station && data['sidoName'] === sido) {
      pm10Value = parseInt(data.pm10Value);
      dataTime = data.dataTime;
    }
  });

  const favoriteHandler = (station) => {
    if (!favorite.includes(station)) {
      dispatch({ type: 'addFavorite', favorite: station });
    } else {
      dispatch({ type: 'removeFavorite', favorite: station });
    }
  };

  const getColor = (value) => {
    if (value < 40) return 'blue';
    if (value >= 40 && value < 60) return 'green';
    if (value >= 60 && value < 80) return 'orange';
    if (value >= 80 && value < 100) return 'red';
    if (value >= 100) return 'black';
    if (!value) return 'grey';
  };

  return (
    <Container $value={getColor(pm10Value)}>
      <TopBox>
        <p>
          {station}
          <span>{sido}</span>
        </p>
        <IconBox onClick={() => favoriteHandler(station)}>
          {favorite.includes(station) ? (
            <FaStar size={24} />
          ) : (
            <FaRegStar size={24} />
          )}
        </IconBox>
      </TopBox>
      <ResultBox>
        <GradeBox $value={getColor(pm10Value)}>
          <span>
            {pm10Value < 40
              ? '좋음'
              : pm10Value >= 40 && pm10Value < 60
              ? '보통'
              : pm10Value >= 60 && pm10Value < 80
              ? '나쁨'
              : pm10Value >= 80 && pm10Value < 100
              ? '매우나쁨'
              : pm10Value >= 100
              ? '최악'
              : '알수없음'}
          </span>
        </GradeBox>
        미세먼지수치 : {!isNaN(pm10Value) ? pm10Value : '-'}
        <br />
        {`${dataTime} 기준`}
      </ResultBox>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 200px;
  border-radius: 10px;
  background-color: ${(props) => props.$value};
`;

const TopBox = styled.div`
  margin: 10px 15px;
  border-radius: 10px 10px 0px 0px;
  float: left;
  color: #fff;
  position: relative;
  align-items: center;

  p {
    font-size: 1.3rem;
    span {
      font-size: 0.8rem;
      margin-left: 5px;
      color: #ffffff;
    }
  }
`;

const IconBox = styled.span`
  position: absolute;
  top: 2px;
  right: 0;

  &:hover {
    cursor: pointer;
  }
`;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
`;

const GradeBox = styled.div`
  font-size: 2.5rem;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  color: ${(props) => props.$value};
`;
