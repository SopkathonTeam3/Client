import React from 'react';
import styled from 'styled-components';
// import { Icon } from './Icon/index';
import BottleRight from './../assets/svgs/bottle_right_1.svg';
import BottleLeft from './../assets/svgs/bottle_left_1.svg';
import LetterModal from './modal/LetterModal';

import { useState, useEffect } from 'react';
const Bottle = ({ userId, content, bottleId }) => {
  const backgroundImage = bottleId % 2 === 1 ? BottleLeft : BottleRight;
  const rightMargin = bottleId % 2 === 1 ? '0px' : '120px';
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  const handleOnclick = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BottleWrapper
        bottleId={bottleId}
        backgroundImage={backgroundImage}
        rightMargin={rightMargin}
        onClick={handleOnclick}
      >
        <ModalWrapper>
          <LetterModal isOpen={isOpen} handleModalClose={handleModalClose} />
        </ModalWrapper>
      </BottleWrapper>
    </>
  );
};

const BottleWrapper = styled.div`
  display: flex;

  width: 130px;
  height: 237px;
  background-image: url(${props => props.backgroundImage});
  margin-top: ${props => props.rightMargin};
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: auto;
  position: fixed;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
export default Bottle;
