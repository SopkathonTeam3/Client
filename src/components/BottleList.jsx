import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import { useRecoilValue } from 'recoil';
import { getBottleSelector } from '../recoil/selectors/selector';

const BottleList = ({ userid, roomid }) => {
  // selector에서 필요한 data => posts, roomResponseDto중 남은 날짜 데이터 가져오기

  const { userResponseDto, posts, roomResponseDto } = useRecoilValue(
    getBottleSelector({ userId: userid, roomId: roomid })
  );

  console.log(userResponseDto, posts, roomResponseDto);
  const { remainingCode: remainDateCode, remainingDays: remainDay } = roomResponseDto;

  console.log(remainDateCode, remainDay);
  const bgColor = userResponseDto.backgroundColorCode;
  const bottles = posts;

  return (
    <BottleListWrapper bottle={bottles} bgColor={bgColor}>
      <Bottle bottleId={1} content1="" content2="" remainDateCode={-4} remainDay={remainDay} />
      {bottles?.map(({ firstAnswer, secondAnswer }, index) => (
        <Bottle
          key={index + firstAnswer}
          content1={firstAnswer}
          content2={secondAnswer}
          bottleId={index + 2}
          remainDateCode={remainDateCode}
          remainDay={remainDay}
        />
      ))}
    </BottleListWrapper>
  );
};

const BottleListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${props => (props.bottle.length < 2 ? '700px' : 'auto')};
  margin: 0px 16px;
  padding: 20px 30px;
  background-image: ${({ bgColor }) => bgColor};
  flex-wrap: wrap;
`;

export default BottleList;
