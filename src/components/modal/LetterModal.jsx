import React from 'react';
import styled from 'styled-components';

const LetterModal = () => {
  return (
    <>
      <St.ModalWrapper>
        <St.ModalHeader>
          <St.ModalHeaderTitle>윤여진님에게 편지를 남겨주세요!</St.ModalHeaderTitle>
        </St.ModalHeader>
      </St.ModalWrapper>
    </>
  );
};

export default LetterModal;

const St = {
  ModalWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 31.9rem;
    height: 61.6rem;
  `,

  ModalHeader: styled.header`
    display: flex;
    flex-direction: column;
    background-color: #edd3b8;

    width: 31.9rem;
    height: 14.4rem;
  `,

  ModalHeaderTitle: styled.h1`
    color: ${({ theme }) => theme.color.gray700};
    ${({ theme }) => theme.text.subtitle1};
  `,

  ModalBtn: styled.button``,
};
