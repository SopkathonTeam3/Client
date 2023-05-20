import React from 'react';
import styled from 'styled-components';
// import { Icon } from './Icon/index';
import BottleRight from './../assets/svgs/bottle_right_1.svg';
import BottleLeft from './../assets/svgs/bottle_left_1.svg';

const Bottle = ({ userId, content, bottleId }) => {
  const backgroundImage = bottleId % 2 === 1 ? BottleLeft : BottleRight;
  const rightMargin = bottleId % 2 === 1 ? '0px' : '120px';

  return (
    <>
      <BottleWrapper
        bottleId={bottleId}
        backgroundImage={backgroundImage}
        rightMargin={rightMargin}
      ></BottleWrapper>
    </>
  );
};

const BottleWrapper = styled.div`
  display: flex;

  width: 130px;
  height: 237px;
  background-image: url(${props => props.backgroundImage});
  margin-top: ${props => props.rightMargin};

  /* margin-right: 30px; */
`;
export default Bottle;
