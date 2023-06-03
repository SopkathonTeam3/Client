import React from 'react';
import styled from 'styled-components';
import share from '../../assets/img/share.png';
import modalClose from '../../assets/svgs/modal_close.svg';

const ShareRequestModal = () => {
  return (
    <St.ModalWrapper>
      <img src={modalClose} alt="모달 닫기 버튼" />
      <St.ModalTitle>
        잠긴 편지를 읽으려면 <br /> 바다를 공유해야해요!
      </St.ModalTitle>
      <St.ModalSubTitle>
        편지 요청하기 버튼으로 <br /> 친구에게 링크를 공유해보세요
      </St.ModalSubTitle>
      <img style={{ width: '29.3rem', height: '12.9rem' }} src={share} alt="물병" />
    </St.ModalWrapper>
  );
};

export default ShareRequestModal;

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
