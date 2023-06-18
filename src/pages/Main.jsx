import React, { useEffect, useState } from 'react';
import BottleList from '../components/BottleList';
import HomeHeader from '../components/HomeHeader';
import RequestModal from '../components/modal/RequestModal';
import styled from 'styled-components';

import { RequestModalAtom } from '../recoil/atoms/modalAtom';
import { useParams, useLocation } from 'react-router-dom';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { userAtom } from '../recoil/atoms/bottleAtom';
import { getBottleSelector } from '../recoil/selectors/selector';

const Main = () => {
  // const [isOpen, setIsOpen] = useState(true);
  const [isOpen, setIsOpen] = useRecoilState(RequestModalAtom);

  const { userid, roomid } = useParams();

  return (
    <div>
      <HomeHeader userid={userid} roomid={roomid} />
      {isOpen && (
        <ModalWrapper className={isOpen ? 'modal' : ''}>
          <RequestModal setIsOpen={setIsOpen} isOpen={isOpen} />
        </ModalWrapper>
      )}
      <BottleList userid={userid} roomid={roomid} />
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
