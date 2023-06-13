import React from 'react';
import styled from 'styled-components';
import float_bottle from '../../assets/img/float_bottle.png';

const RequestModal = () => {
  return (
    <St.ModalWrapper>
      <St.ModalTitle>
        바다가 만들어졌어요! <br /> 편지를 요청해볼까요?
      </St.ModalTitle>
      <St.ModalSubTitle>나만의 표류병을 모아보세요</St.ModalSubTitle>
      <St.ModalImg src={float_bottle} alt="물병"></St.ModalImg>
    </St.ModalWrapper>
  );
};

export default RequestModal;

const St = {
  ModalWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

    width: 293px;
    height: auto;
    border-radius: 2rem;

    background-color: ${({ theme }) => theme.color.white};
  `,

  ModalTitle: styled.h1`
    ${({ theme }) => theme.text.subtitle1};
    margin-bottom: 0.8rem;
    margin-top: 54px;
  `,

  ModalSubTitle: styled.h2`
    ${({ theme }) => theme.text.body2};
    color: #7d7d7d;
    margin-bottom: 3.2rem;
  `,

  ModalImg: styled.img`
    width: 293px;
    height: auto;
    position: relative;
    bottom: -1;
  `,
};
