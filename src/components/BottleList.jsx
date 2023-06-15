import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import { getLetter } from '../utils/apis/getLetter';
import { useParams, useLocation } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import ShareRequestModal from './modal/ShareRequestModal';
import { getBottleSelector } from '../recoil/selectors/selector';

const BottleList = () => {
  // selector에서 필요한 data => posts, roomResponseDto중 남은 날짜 데이터 가져오기
  const { userResponseDto, posts, roomResponseDto } = useRecoilValue(getBottleSelector);

  const bgColor = userResponseDto.backgroundColorCode;
  const bottles = posts;
  const dDay = roomResponseDto.remainingDays;

  return (
    <BottleListWrapper bottle={bottles} bgColor={bgColor}>
      <Bottle bottleId={1} content1="" content2="" />
      {bottles?.map(({ firstAnswer, secondAnswer }, index) => (
        <Bottle key={index} content1={firstAnswer} content2={secondAnswer} bottleId={index + 2} />
      ))}
    </BottleListWrapper>
  );
};

const BottleListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${props => (props.bottle.length < 2 ? '550px' : 'auto')};
  margin: 0px 16px;
  padding: 20px 30px;
  background-image: ${({ bgColor }) => bgColor};
  flex-wrap: wrap;
`;

export default BottleList;
