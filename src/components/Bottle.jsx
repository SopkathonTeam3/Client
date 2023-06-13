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

  const handleOnclick = () => {
    console.log(bottleId, 'id입니다');
    setIsOpen(true);
    console.log(bottleId);
  };

  return (
    <BottleContainer
      backgroundimage={backgroundImage}
      rightmargin={rightMargin}
      onClick={handleOnclick}
    >
      {bottleId === 1 && <PlusButton></PlusButton>}
      {isOpen && (
        <ModalWrapper className={isOpen ? 'modal' : ''}>
          <LetterModal
            setIsOpen={setIsOpen}
            bottleId={bottleId}
            content1={content1}
            content2={content2}
          />
        </ModalWrapper>
      )}
    </BottleContainer>
  );
};

const BottleContainer = styled.div`
  display: flex;
  position: relative;
  width: 13rem;
  height: 23.7rem;
  background-image: url(${props => props.backgroundimage});
  margin-top: ${props => props.rightmargin};

  cursor: pointer;
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
  z-index: 3;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.6);

  cursor: auto;
`;

export default Bottle;
