import React from 'react';
import styled from 'styled-components';
// import { Icon } from './Icon/index';
import BottleRight1 from './../assets/svgs/bottle_right_1.svg';
import BottleRight2 from './../assets/svgs/bottle_right_2.svg';
import BottleRight4 from './../assets/svgs/bottle_right_4.svg';
import BottleRight8 from './../assets/svgs/bottle_right_8.svg';

import BottleLeft1 from './../assets/svgs/bottle_left_1.svg';
import BottleLeft2 from './../assets/svgs/bottle_left_2.svg';
import BottleLeft4 from './../assets/svgs/bottle_left_4.svg';
import BottleLeft8 from './../assets/svgs/bottle_left_8.svg';

import LetterModal from './modal/LetterModal';
import PlusButtonImage from './../assets/svgs/plusButton.svg';
import { useState, useEffect } from 'react';

import { getBottleSelector } from '../recoil/selectors/selector';
import { useRecoilValue } from 'recoil';
const Bottle = ({ userId, content1, content2, bottleId, remainDateCode }) => {
  const rightMargin = bottleId % 2 === 1 ? '0px' : '120px';
  let backgroundImage = BottleLeft1;
  const [isOpen, setIsOpen] = useState(false);

  const {
    roomResponseDto: { remainingCode: remainCode },
  } = useRecoilValue(getBottleSelector);

  if (bottleId % 2 === 1) {
    switch (remainDateCode) {
      case -4:
        backgroundImage = BottleLeft1;
        break;
      case -3:
        backgroundImage = BottleLeft2;
        break;
      case -2:
        backgroundImage = BottleLeft4;
        break;
      case -1:
        backgroundImage = BottleLeft8;
        break;
      default:
        backgroundImage = BottleLeft1;
        break;
    }
  } else {
    switch (remainDateCode) {
      case -4:
        backgroundImage = BottleRight1;
        break;
      case -3:
        backgroundImage = BottleRight2;
        break;
      case -2:
        backgroundImage = BottleRight4;
        break;
      case -1:
        backgroundImage = BottleRight8;
        break;
      default:
        backgroundImage = BottleRight1;
        break;
    }
  }

  // const backgroundImage = (bottleId % 2 === 1)&&(remainCode===-4)  ? BottleLeft1 : BottleRight1;

  const handleOnclick = () => {
    setIsOpen(true);
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
  /* ${props =>
    props.remainCode === -4 &&
    `
    background-image:url(${props => props.backgroundimage});
  `} */
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
