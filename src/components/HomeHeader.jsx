import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { getBottleSelector } from '../recoil/selectors/selector';

const HomeHeader = ({ userid, roomid }) => {
  const [userName, setUserName] = useState();
  const [remainDays, setRemainDays] = useState();
  //링크 복사
  const handleCopyClipBoard = async text => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 편지 전달 링크가 복사되었어요!');
    } catch (error) {
      console.log(error);
    }
  };

  //get 통신한 selector에서 userData중 이름 정보 & roomData 중 남은 일 정보 가져오기
  const { userResponseDto, roomResponseDto } = useRecoilValue(
    getBottleSelector({ userId: userid, roomId: roomid })
  );

  useEffect(() => {
    setUserName(userResponseDto.name);
    setRemainDays(roomResponseDto.remainingDays);
  }, []);
  console.log(userResponseDto, roomResponseDto);
  return (
    <St.headerWrapper>
      <St.headerTop>
        <St.headerTitle>{userName}님의 바다</St.headerTitle>
        <St.headerBtn onClick={() => handleCopyClipBoard(window.location.href)}>
          편지 요청하기
        </St.headerBtn>
      </St.headerTop>
      {remainDays > 0 ? (
        <St.headerContent>
          편지 열람까지 <St.dayHighLight>{remainDays}</St.dayHighLight>일 남았어요
        </St.headerContent>
      ) : (
        <St.headerContent>편지를 열람할 수 있어요!</St.headerContent>
      )}
    </St.headerWrapper>
  );
};

export default HomeHeader;

const St = {
  headerWrapper: styled.section`
    height: 175px;
    width: 100%;
    padding: 0 32px;
    background-color: ${({ theme }) => theme.color.white};
  `,
  headerTop: styled.div`
    display: flex;
    padding: 42px 0 9px 0;
    gap: 63px;
  `,
  headerTitle: styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
  `,
  headerBtn: styled.button`
    width: 127px;
    height: 44px;
    border-radius: 80px;
    padding: 12px 10px;
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
  `,
  headerContent: styled.p`
    ${({ theme }) => theme.text.body2};
    color: #7d7d7d;
  `,
  dayHighLight: styled.span`
    ${({ theme }) => theme.text.body2};
    color: ${({ theme }) => theme.color.blue};
  `,
};
