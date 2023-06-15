import React, { useEffect, useState } from 'react';
import BottleList from '../components/BottleList';
import HomeHeader from '../components/HomeHeader';
import RequestModal from '../components/modal/RequestModal';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { RequestModalAtom } from '../recoil/atoms/modalAtom';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userAtom } from '../recoil/atoms/bottleAtom';

const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [count, setCount] = useRecoilState(RequestModalAtom);
  const { userid, roomid } = useParams();

  // console.log('userid:', userid, 'roomid:', roomid);

  const setUserInfo = useSetRecoilState(userAtom);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setUserInfo({ userId: userid, roomId: roomid });
    setCount(count + 1);
    if (count != 0) {
      closeModal();
    }
    console.log(count);
  }, []);

  return (
    <div>
      <HomeHeader />
      {isOpen && (
        <ModalWrapper className={isOpen ? 'modal' : ''}>
          <RequestModal setIsOpen={setIsOpen} isOpen={isOpen} />
        </ModalWrapper>
      )}
      <BottleList />
    </div>
  );
};

export default Main;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: auto;
  position: fixed;
  z-index: 3;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.6);

  cursor: auto;
`;
