import React from 'react';
import styled from 'styled-components';

const LetterModal = () => {
  return (
    <>
      <ModalWrapper>
        <ModalHeader></ModalHeader>
      </ModalWrapper>
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
  `,

  ModalHeader: styled.header`
    display: flex;
    flex-direction: column;
  `,

  ModalHeaderTitle: styled.h1`
    color: ${({ theme }) => theme.color.gray700};
    ${({ theme }) => theme.text.subtitle1};
  `,
  ModalBtn: styled.button``,
};
