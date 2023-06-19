import React from 'react';
import styled from 'styled-components';
import share from '../../assets/img/share.png';
import modalClose from '../../assets/svgs/modal_close.svg';

const ShareRequestModal = ({ reqClose }) => {
  const handleModalClose = e => {
    reqClose(false);
    e.stopPropagation();
  };
  return (
    <St.ModalWrapper>
      <St.CloseWrapper>
        <img
          src={modalClose}
          alt="모달 닫기 버튼"
          onClick={handleModalClose}
          style={{ cursor: 'pointer' }}
        />
      </St.CloseWrapper>
      <St.ModalTitle>잠긴 편지를 읽으려면 바다를 공유해야해요!</St.ModalTitle>
      <St.ModalSubTitle>편지 요청하기 버튼으로 친구에게 링크를 공유해보세요</St.ModalSubTitle>
      <img style={{ width: '29.3rem', height: '12.9rem' }} src={share} alt="물병" />
    </St.ModalWrapper>
  );
};

export default ShareRequestModal;

const St = {
  ModalWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 29.3rem;
    height: 29.8rem;

    background-color: white;
    border-radius: 2rem;
  `,
  CloseWrapper: styled.div`
    display: flex;
    height: 2.4rem;
    width: 29.3rem;
    margin-right: 1.8rem;
    margin-top: 1.8rem;
    justify-content: end;
  `,
  ModalTitle: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 19.7rem;
    height: 5.6rem;
    margin-bottom: 10px;
    ${({ theme }) => theme.text.subtitle2};
  `,

  ModalSubTitle: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 18.8rem;
    height: 4.8rem;

    ${({ theme }) => theme.text.body2};
    color: #7d7d7d;
  `,
};
