import React from 'react';
import styled from 'styled-components';

const RequestModal = () => {
  return (
    <St.ModalWrapper>
      <St.ModalTitle>
        바다가 만들어졌어요! <br /> 편지를 요청해볼까요?
      </St.ModalTitle>
      <St.ModalSubTitle>나만의 표류병을 모아보세요</St.ModalSubTitle>
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
  `,

  ModalSubTitle: styled.h2`
    ${({ theme }) => theme.text.body2};
    color: #7d7d7d;
  `,
};
