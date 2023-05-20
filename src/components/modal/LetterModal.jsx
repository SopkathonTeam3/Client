import React from 'react';
import styled from 'styled-components';

const LetterModal = () => {
  return (
    <>
      <St.ModalWrapper>
        <St.ModalHeader>
          <St.ModalHeaderContent>
            <St.ModalIconWrapper></St.ModalIconWrapper>
            <St.ModalHeaderTitle>
              윤여진님에게 <br />
              편지를 남겨주세요!
            </St.ModalHeaderTitle>
          </St.ModalHeaderContent>
        </St.ModalHeader>
        <St.ModalMain>
          <St.ModalQuestion>Q.첫인상은 어땠나요?</St.ModalQuestion>
          <p>
            <St.ModalAnswerBox maxlength="50" placeholder="50자 내로 작성해주세요" />
          </p>

          <St.ModalQuestion>Q.의외의 지점은 무엇이었나요?</St.ModalQuestion>
          <St.ModalAnswerBox maxlength="50" placeholder="50자 내로 작성해주세요" />
        </St.ModalMain>
        <St.ModalBtn>편지 띄우기 </St.ModalBtn>
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

  ModalHeaderContent: styled.div`
    display: flex;
    flex-direction: column;
    width: 31.9rem;
    margin: 0 2.4rem;
  `,

  ModalHeader: styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #edd3b8;

    width: 100%;
    height: 14.4rem;
    border-top-right-radius: 1.2rem;
    border-top-left-radius: 1.2rem;

    margin-bottom: 2.8rem;
  `,

  ModalIconWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column;
    width: 22.7rem;

    height: 5rem;
  `,

  ModalHeaderTitle: styled.h1`
    color: ${({ theme }) => theme.color.gray700};
    ${({ theme }) => theme.text.subtitle1};
  `,
  ModalMain: styled.div`
    display: flex;
    flex-direction: column;
  `,

  ModalAnswerBox: styled.textarea`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.gray50};
    color: ${({ theme }) => theme.color.gray300};

    border-radius: 8px;
    width: 27.1rem;
    height: 12rem;

    margin-bottom: 2.4rem;
    padding: 2rem;
    ${({ theme }) => theme.text.body2};
  `,
  ModalQuestion: styled.h2`
    color: ${({ theme }) => theme.color.gray700};
    ${({ theme }) => theme.text.subtitle1};
    margin-bottom: 1.4rem;
  `,

  ModalBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 31.9rem;
    height: 6.9rem;

    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.text.subtitle1};

    border-bottom-left-radius: 1.2rem;
    border-bottom-right-radius: 1.2rem;
  `,
};
