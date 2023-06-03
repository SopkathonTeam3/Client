import styled from 'styled-components';
import React from 'react';
import Bottle from './Bottle';
import { useGetLetter } from '../recoil/useGetLetter';

const BottleList = () => {
  const bottles = useRecoilValue(useGetLetter);
  console.log(bottles);
  const bottlesData = bottles.data.posts;
  console.log(bottlesData);
  return (
    <BottleListWrapper>
      {bottlesData.map(({ firstAnswer, secondAnswer }, index) => (
        <Bottle
          key={index}
          content1={firstAnswer}
          content2={secondAnswer}
          bottleId={index + 1}
        ></Bottle>
      ))}
    </BottleListWrapper>
  );
};

const BottleListWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0px 16px;
  padding: 0px 30px;
  background-image: linear-gradient(161.58deg, #9a94fd 0%, #0089db 31.02%, #0056ba 78.45%);
  flex-wrap: wrap;

  cursor: pointer;
`;

export default BottleList;
