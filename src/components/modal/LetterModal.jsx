import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalClose from '../../assets/svgs/modal_close.svg';
import Message from '../../assets/svgs/modal_message.svg';

const LetterModal = ({ isOpen, handleModalClose }) => {
  console.log(isOpen);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answerOne, setAnswerone] = useState('');
  const [answerTwo, setAnswertwo] = useState('');

  const handleOne = e => {
    setAnswerone(e.target.value);
  };

  const handleTwo = e => {
    setAnswertwo(e.target.value);
  };

  const handleAnswer = () => {
    if (answerOne.length >= 1 && answerTwo.length >= 1) {
      setIsAnswered(true);
    } else {
      setIsAnswered(false);
    }
  };

  const handleClose = () => {
    handleModalClose();
    console.log(isOpen);
  };

  useEffect(() => {
    handleAnswer();
  }, [answerOne, answerTwo]);

  useEffect(() => {
    if (!isOpen) {
      handleModalClose();
    }
  }, [isOpen]);
  return (
    <St.ModalWrapper isOpen={isOpen}>
      <St.ModalHeader>
        <St.ModalHeaderContent>
          <St.ModalIconWrapper>
            <CloseModal src={ModalClose} alt="modalClose" />
          </St.ModalIconWrapper>

          <MessageIcon src={Message} alt="messageIcon" />
          <St.ModalHeaderTitle>
            윤여진님에게 <br />
            편지를 남겨주세요!
          </St.ModalHeaderTitle>
        </St.ModalHeaderContent>
      </St.ModalHeader>
      <St.ModalMain>
        <St.ModalQuestion>Q.첫인상은 어땠나요?</St.ModalQuestion>
        <p>
          <St.ModalAnswerBox
            onChange={handleOne}
            maxLength="50"
            placeholder="50자 내로 작성해주세요"
          />
        </p>

        <St.ModalQuestion>Q.의외의 지점은 무엇이었나요?</St.ModalQuestion>
        <St.ModalAnswerBox
          onChange={handleTwo}
          maxLength="50"
          placeholder="50자 내로 작성해주세요"
        />
      </St.ModalMain>
      <St.ModalBtn isAnswered={isAnswered} onClick={handleModalClose}>
        편지 띄우기
      </St.ModalBtn>
    </St.ModalWrapper>
  );
};

export default LetterModal;

const St = {
  ModalWrapper: styled.article`
    display: ${props => (props.isOpen ? 'flex' : 'none')};

    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 31.9rem;
    height: 61.6rem;

    border-radius: 1.2rem;
    background-color: ${({ theme }) => theme.color.white};

    z-index: 99;
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

    border-top-right-radius: 1.2rem;
    border-top-left-radius: 1.2rem;

    width: 100%;
    height: 14.4rem;

    margin-bottom: 2.8rem;
  `,

  ModalIconWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;
    width: 27.7rem;

    height: auto;
  `,

  ModalHeaderTitle: styled.h1`
    color: ${({ theme }) => theme.color.gray700};
    ${({ theme }) => theme.text.subtitle1};
  `,
  ModalMain: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  ModalAnswerBox: styled.textarea`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.gray50};
    color: ${({ theme }) => theme.color.gray500};

    border-radius: 8px;
    width: 27.1rem;
    height: 12rem;

    margin-bottom: 2.4rem;
    padding: 2rem;
    resize: none;
    font-style: ${({ theme }) => theme.text.body2};
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

    border-bottom-right-radius: 1.2rem;
    border-bottom-left-radius: 1.2rem;
    background-color: ${({ isAnswered, theme }) =>
      isAnswered ? theme.color.black : theme.color.gray100};

    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.text.subtitle1};
  `,
};

const CloseModal = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const MessageIcon = styled.img`
  width: 3.8rem;
  height: 3.8rem;
`;
