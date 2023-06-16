import React, { useEffect, useState } from 'react';
import BottleList from '../components/BottleList';
import HomeHeader from '../components/HomeHeader';
import RequestModal from '../components/modal/RequestModal';
import styled from 'styled-components';

import { RequestModalAtom } from '../recoil/atoms/modalAtom';
import { useParams, useLocation } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { userAtom } from '../recoil/atoms/bottleAtom';
import { modalAtom } from '../recoil/atoms/bottleAtom';
const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [modal, setModal] = useRecoilState(modalAtom);
  const { userid, roomid } = useParams();
  // const [rerender, setRerender] = useState(false);
  const setUserInfo = useSetRecoilState(userAtom);

  // let prePath = '';
  // let location = useLocation();
  // console.log(location);
  // useEffect(() => {
  //   if (prePath.indexOf('/main/') !== -1) {
  //     prePath = '';
  //     // window.location.reload(); // 새로고침
  //     console.log('ASdasd');
  //   }

  //   prePath = location.pathname; // 지금의 주소를 저장한다.
  // }, [userid, roomid]);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setUserInfo({ userId: userid, roomId: roomid });
    // console.log(userid, roomid);
    // setCount(count + 1);
    // if (count != 0) {
    //   closeModal();
    // }
    // console.log(count);
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
      {/* <BottleList /> */}
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
