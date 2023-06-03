import React from 'react';
import styled from 'styled-components';
// import { Icon } from './Icon/index';
import BottleRight from './../assets/svgs/bottle_right_1.svg';
import BottleLeft from './../assets/svgs/bottle_left_1.svg';
import LetterModal from './modal/LetterModal';
import PlusButtonImage from './../assets/svgs/plusButton.svg';
import { useState, useEffect } from 'react';
const Bottle = ({ userId, content1, content2, bottleId }) => {
  const backgroundImage = bottleId % 2 === 1 ? BottleLeft : BottleRight;
  const rightMargin = bottleId % 2 === 1 ? '0px' : '120px';
  const [isOpen, setIsOpen] = useState(false);
  // console.log(bottleId);
  // console.log(content1 + '---' + content2);
  useEffect(() => {}, [isOpen]);
  const handleOnclick = () => {
    setIsOpen(true);
    console.log(bottleId);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BottleContainer
        bottleId={bottleId}
        backgroundImage={backgroundImage}
        rightMargin={rightMargin}
        onClick={handleOnclick}
      >
        {bottleId === 1 && <PlusButton></PlusButton>}
        <ModalWrapper>
          <LetterModal
            bottleId={bottleId}
            content1={content1}
            content2={content2}
            isOpen={isOpen}
          ></LetterModal>
        </ModalWrapper>
      </BottleContainer>
    </>
  );
};

const BottleContainer = styled.div`
  display: flex;
  position: relative;
  width: 13rem;
  height: 23.7rem;
  background-image: url(${props => props.backgroundImage});
  margin-top: ${props => props.rightMargin};
`;

const PlusButton = styled.button`
  position: absolute;
  top: 50%;
  left: 35%;
  width: 4.5rem;
  height: 4.4rem;

  z-index: 1;
  background: url(${PlusButtonImage});
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: auto;
  position: fixed;
  z-index: 999;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export default Bottle;
