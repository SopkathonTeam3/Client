import React from 'react';
import styled from 'styled-components';
import bottle from '../assets/img/onBoardingBottle.png';
import float from '../assets/img/float.png';
import { useNavigate } from 'react-router-dom';

const OnBoarding = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/user');
  };

  return (
    <>
      <St.Wrapper>
        <St.ImgWrapper>
          <img src={bottle} alt="물병" />
        </St.ImgWrapper>
        <St.Title>
          <p>바다에 표류하는</p>
          <p>유리병 속 편지</p>
        </St.Title>
        <St.Subtitle>
          <p>친구들에게 편지를 받아</p>
          <p>내 바다를 유리병으로 채워보아요</p>
        </St.Subtitle>

        <St.MakeBtn onClick={handleStart}>내 바다 만들기</St.MakeBtn>
        <img src={float} alt="바닥" />
      </St.Wrapper>
    </>
  );
};

export default OnBoarding;

const St = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
  `,
  ImgWrapper: styled.div`
    display: flex;
    width: 70px;
    /* height: 110px; */
    margin-bottom: 12px;
    margin-top: 128px;
  `,
  Title: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 8px;

    & > p {
      ${({ theme }) => theme.text.subtitle0};
    }
  `,
  Subtitle: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 36px;

    & > p {
      ${({ theme }) => theme.text.subtitle2.body1};
      color: #7d7d7d;
    }
  `,
  MakeBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    /* width: 169px; */

    background-color: ${({ theme }) => theme.color.black};

    border-radius: 40px;
    padding: 18px 28px;
    margin-bottom: 80px;
    & {
      ${({ theme }) => theme.text.subtitle2};
      color: ${({ theme }) => theme.color.white};
    }
  `,
};
