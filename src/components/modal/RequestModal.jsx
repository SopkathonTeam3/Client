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
      <img style={{ width: '293px', height: '129px' }} src={float_bottle} alt="물병" />
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

    width: 29.3rem;
    height: 29.8rem;

    border-radius: 2rem;
  `,

  ModalTitle: styled.h1`
    ${({ theme }) => theme.text.subtitle1};
    margin-bottom: 0.8rem;
  `,

  ModalSubTitle: styled.h2`
    ${({ theme }) => theme.text.body2};
    color: #7d7d7d;
    margin-bottom: 3.2rem;
  `,
};
