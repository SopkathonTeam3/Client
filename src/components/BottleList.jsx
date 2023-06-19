import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import { useRecoilValue } from 'recoil';
import { getBottleSelector } from '../recoil/selectors/selector';
import { useNavigate } from 'react-router-dom';
const BottleList = ({ userid, roomid }) => {
  // selector에서 필요한 data => posts, roomResponseDto중 남은 날짜 데이터 가져오기
  const navigate = useNavigate();
  const { userResponseDto, posts, roomResponseDto } = useRecoilValue(
    getBottleSelector({ userId: userid, roomId: roomid })
  );

  const { remainingCode: remainDateCode, remainingDays: remainDay } = roomResponseDto;

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
      <MainpageBtn onClick={() => navigate('/')}>나만의 바다 만들기</MainpageBtn>
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

const MainpageBtn = styled.button`
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 117px;
  height: 44px;
  border-radius: 80px;
  padding: 12px 10px;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
`;

export default BottleList;
