import React from 'react';
import styled from 'styled-components';
import bottle from '../assets/img/onBoardingBottle.png';
import float from '../assets/img/float.png';

const OnBoarding = () => {
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

        <St.MakeBtn>내 바다 만들기</St.MakeBtn>

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
    align-items: center;
    width: 100%;
    height: 100vh;
  `,
  ImgWrapper: styled.div`
    display: flex;
    width: 7rem;
    height: 10rem;
    margin-bottom: 1.2rem;
    margin-top: 12.8rem;
  `,
  Title: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 0.8rem;

    & > p {
      ${({ theme }) => theme.text.subtitle0};
    }
  `,
  Subtitle: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 3.6rem;

    & > p {
      ${({ theme }) => theme.text.subtitle2.body1};
      color: #7d7d7d;
    }
  `,
  MakeBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 16.9rem;
    height: 6.4rem;

    background-color: ${({ theme }) => theme.color.black};

    border-radius: 40px;

    margin-bottom: 8rem;
    & {
      ${({ theme }) => theme.text.subtitle2};
      color: ${({ theme }) => theme.color.white};
    }
  `,
};
