import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import { useRecoilValue, useRecoilState } from 'recoil';
import { getBottleSelector } from '../recoil/selectors/selector';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { shareReqModalAtom } from '../recoil/atoms/bottleAtom';
import { useNavigate } from 'react-router-dom';
const HomeHeader = ({ userid, roomid }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [remainDays, setRemainDays] = useState();
  const [copied, setCopied] = useState(false);
  const [isShare, setIsShare] = useRecoilState(shareReqModalAtom);
  const handleCopyClipBoard = () => {
    alert('클립보드에 편지 전달 링크가 복사되었어요!');
    setIsShare(1);
  };
  console.log('isShare ' + isShare);
  const onCopy = useCallback(() => {
    setCopied(true);
  });

  //get 통신한 selector에서 userData중 이름 정보 & roomData 중 남은 일 정보 가져오기
  const { userResponseDto, roomResponseDto } = useRecoilValue(
    getBottleSelector({ userId: userid, roomId: roomid })
  );

  useEffect(() => {
    setUserName(userResponseDto.name);
    setRemainDays(roomResponseDto.remainingDays);
  }, []);
  //https://foryouletter.vercel.app/
  return (
    <St.headerWrapper>
      <St.headerTop>
        <St.headerTitle>{userName}님의 바다</St.headerTitle>
        <CopyToClipboard onCopy={onCopy} text={window.location.href}>
          <St.headerBtn onClick={() => handleCopyClipBoard()}>편지 요청하기</St.headerBtn>
        </CopyToClipboard>
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

  contentBox: styled.div`
    width: 200px;
  `,

  dayHighLight: styled.span`
    ${({ theme }) => theme.text.body2};
    color: ${({ theme }) => theme.color.blue};
  `,
};
