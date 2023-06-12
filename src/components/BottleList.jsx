import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import { getLetter } from '../recoil/useGetLetter';

const BottleList = () => {
  const [bottles, setBottles] = useState([]);

  /*  getLetter에서 async await를 걸어주었지만
  호출하는 컴포넌트에서도 async await를 처리해야 비동기처리가 가능해
  이건 이벤트 루프 구조를 생각하면 이해할 수 있습니다! */
  const getBottleData = async () => {
    const data = await getLetter();
    console.log(data);
    if (data) {
      setBottles(data.data.posts);
      console.log(data);
    }
  };

  // 처음 렌더링 될대 호출하면 되겠죠!
  useEffect(() => {
    getBottleData();
  }, []);
  // 그리고  < /> 요렇게 닫힌태그로 해주면 간결해지겠지!

  return (
    <BottleListWrapper>
      {bottles &&
        bottles.map(({ firstAnswer, secondAnswer }, index) => (
          <Bottle key={index} content1={firstAnswer} content2={secondAnswer} bottleId={index + 1} />
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
`;

export default BottleList;
