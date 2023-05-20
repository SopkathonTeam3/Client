import React from 'react';
import styled from 'styled-components';
import message from '../common/assets/icon/message.svg';
import close from '../common/assets/icon/close.svg';

const LetterModal = () => {
  return (
    <>
      <St.ModalWrapper>
        <St.ModalHeader>
          <St.ModalHeaderTitle>
            <St.ModalIconWrapper>
              <St.ModalIcon src={close} alt="closemodal" />
              <St.ModalIcon src={message} alt="message" />
            </St.ModalIconWrapper>
            윤여진님에게 <br />
            편지를 남겨주세요!
          </St.ModalHeaderTitle>
        </St.ModalHeader>
        <St.ModalMain>
          <St.ModalQuestion>Q.첫인상은 어땠나요?</St.ModalQuestion>
          <St.ModalAnswerBox />

          <St.ModalQuestion>Q.의외의 지점은 무엇이었나요?</St.ModalQuestion>
          <St.ModalAnswerBox />
        </St.ModalMain>
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

    border-radius: 1.2rem;
    background-color: ${({ theme }) => theme.color.white};
  `,

  ModalHeader: styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #edd3b8;

    width: 100%;
    height: 14.4rem;

    margin-bottom: 2.8rem;
  `,

  ModalIconWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ModalIcon: styled.img`
    display: flex;
  `,
  ModalHeaderTitle: styled.h1`
    color: ${({ theme }) => theme.color.gray700};
    ${({ theme }) => theme.text.subtitle1};
  `,
  ModalMain: styled.div`
    display: flex;
    flex-direction: column;
  `,

  ModalAnswerBox: styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.color.gray50};
    color: ${({ theme }) => theme.color.gray300};

    border-radius: 8px;
    width: 27.1rem;
    height: 12rem;

    margin-bottom: 2.4rem;
  `,
  ModalQuestion: styled.h2`
    color: ${({ theme }) => theme.color.gray700};
    ${({ theme }) => theme.text.subtitle1};
    margin-bottom: 1.4rem;
  `,

  ModalBtn: styled.button``,
};
