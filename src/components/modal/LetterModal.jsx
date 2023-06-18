import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalClose from '../../assets/svgs/modal_close.svg';
import Message from '../../assets/svgs/modal_message.svg';

import '../../styles/modal.css';

import { postLetter } from '../../utils/apis/postLetter';
import { useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { getBottleSelector } from '../../recoil/selectors/selector';

/* isOpen을 제어받는 것보다 이칭구를 제어하는 함수를
props로 보내서 closeModal로 state를 바꿔주는게 직관적인 사용법이야!
다만, 이게 Bottle의 자식 컴포넌트에서 부모 컴포넌트의 state를 바꿔주는 거라
이벤트 버블링 이라는 현상때문에 그냥 setIsOpen을 실행하면, 부모 컴포넌트에 만들어져 있는 이벤트가 작동하게 되어서
결국에는 Bottle의 onClick 함수가 실행되어버려!
그래서 우리는 이 전파를 막기 위해 e.stopPropagation 을 실행시킨뒤, setIsOpen을 사용해야해! */
const LetterModal = ({ setIsOpen, bottleId, content1, content2 }) => {
  const [answerOne, setAnswerOne] = useState(content1);
  const [answerTwo, setAnswerTwo] = useState(content2);
  const [isAnswered, setIsAnswered] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const { userid, roomid } = useParams();

  const [userName, setUserName] = useState();
  const { userResponseDto, roomResponseDto } = useRecoilValue(
    getBottleSelector({ userId: userid, roomId: roomid })
  );
  useEffect(() => {
    setUserName(userResponseDto.name);
  });

  const handleOne = e => {
    setAnswerOne(e.target.value);
  };

  const handleTwo = e => {
    setAnswerTwo(e.target.value);
  };

  const handleAnswer = () => {
    if (answerOne.length >= 1 && answerTwo.length >= 1) {
      setIsAnswered(true);
    } else {
      setIsAnswered(false);
    }
  };
  const closeModal = e => {
    console.log('닫아!');
    setIsOpen(false);
    e.stopPropagation();
  };

  const createLetter = async e => {
    await postLetter(userid, roomid, answerOne, answerTwo);
    closeModal(e);
    window.location.reload();
  };
  useEffect(() => {
    handleAnswer();
    console.log(isAnswered);
  }, [answerOne, answerTwo]);

  useEffect(() => {
    if (bottleId === 1) {
      setReadOnly(false);
    }
  }, []);
  return (
    <St.ModalWrapper>
      <St.ModalHeader>
        <St.ModalHeaderContent>
          <St.ModalIconWrapper>
            <St.CloseModal src={ModalClose} alt="modalClose" onClick={closeModal} />
          </St.ModalIconWrapper>

          <St.MessageIcon src={Message} alt="messageIcon" />
          <St.ModalHeaderTitle>
            {userName}에게 <br />
            편지를 남겨주세요!
          </St.ModalHeaderTitle>
        </St.ModalHeaderContent>
      </St.ModalHeader>
      <St.ModalMain>
        <St.ModalQuestion>Q.첫인상은 어땠나요?</St.ModalQuestion>
        <p>
          <St.ModalAnswerBox
            onChange={handleOne}
            value={answerOne}
            maxLength="50"
            placeholder="50자 내로 작성해주세요"
            readOnly={readOnly}
          />
        </p>

        <St.ModalQuestion>Q.의외의 지점은 무엇이었나요?</St.ModalQuestion>
        <St.ModalAnswerBox
          onChange={handleTwo}
          value={answerTwo}
          maxLength="50"
          placeholder="50자 내로 작성해주세요"
          readOnly={readOnly}
        />
      </St.ModalMain>
      {bottleId != 1 ? (
        <St.ModalBtn isanswered={isAnswered.toString()} onClick={closeModal}>
          닫기
        </St.ModalBtn>
      ) : (
        <St.ModalBtn isanswered={isAnswered.toString()} onClick={createLetter}>
          편지 띄우기
        </St.ModalBtn>
      )}
    </St.ModalWrapper>
  );
};

const St = {
  ModalWrapper: styled.article`
    display: flex;
    position: absolute;

    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 31.9rem;
    height: 61.6rem;

    border-radius: 1.2rem;
    background-color: ${({ theme }) => theme.color.white};

    z-index: 999;
    cursor: auto;

    animation: modal-show 0.3s;
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
    font-family: inherit;
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
    background-color: ${({ isanswered, theme }) =>
      isanswered === 'true' ? theme.color.black : theme.color.gray100};

    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.text.subtitle1};
  `,
  CloseModal: styled.img`
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  `,

  MessageIcon: styled.img`
    width: 3.8rem;
    height: 3.8rem;
  `,
};

export default LetterModal;
