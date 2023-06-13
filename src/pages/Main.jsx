import React, { useCallback, useEffect, useState } from 'react';
import BottleList from '../components/BottleList';
import HomeHeader from '../components/HomeHeader';
import RequestModal from '../components/modal/RequestModal';
import styled from 'styled-components';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { RequestModalAtom } from '../recoil/atoms/modalAtom';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useRecoilState(RequestModalAtom);

  useEffect(() => {
    setCount(count + 1);
    // if (count === 0) {
    //   setIsOpen(true);
    //   setTimeout(() => setIsOpen(false), 3000);
    // } else {
    //   setIsOpen(false);
    // }
    console.log(count);
  }, []);

  return (
    <div>
      <HomeHeader />
      {isOpen && (
        <ModalWrapper>
          <RequestModal />
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
