import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const UserPage = () => {
  const [userName, setUserName] = useState();
  const inputRef = useRef();

  const handleInputChange = () => {
    setUserName(inputRef.current.value);
  };

  const handleUserSubmit = () => {
    userName && localStorage.setItem('userName', userName);
  };

  return (
    <St.userPageWrapper>
      <St.userInfoText>
        <p>
          당신의
          <br />
          이름은 무엇인가요?
        </p>
      </St.userInfoText>
      <St.userNameInput ref={inputRef} onChange={handleInputChange}></St.userNameInput>
      <St.userSubmitBtn onClick={handleUserSubmit}>버튼</St.userSubmitBtn>
    </St.userPageWrapper>
  );
};

export default UserPage;

const St = {
  userPageWrapper: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  `,
  userInfoText: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 164px 0 16px 0;
    color: ${({ theme }) => theme.color.black};
    & > p {
      ${({ theme }) => theme.text.subtitle1};
      line-height: 40px;
    }
  `,
  userNameInput: styled.input`
    height: 30px;
    background-color: grey;
  `,
  userSubmitBtn: styled.button`
    border: none;
  `,
};
