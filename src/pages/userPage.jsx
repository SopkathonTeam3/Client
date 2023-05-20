import React from 'react';
import styled from 'styled-components';

const UserPage = () => {
  return (
    <St.userPageWrapper>
      <St.userInfoText>
        <p>당신의 이름은 무엇인가요?</p>
      </St.userInfoText>
      <St.userNameInput></St.userNameInput>
      <St.userSubmitBtn>버튼</St.userSubmitBtn>
    </St.userPageWrapper>
  );
};

export default UserPage;

const St = {
  userPageWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
  userInfoText: styled.div`
    background-color: black;
    & > p {
      color: red;
    }
  `,
  userNameInput: styled.input`
    background-color: grey;
  `,
  userSubmitBtn: styled.button`
    border: none;
  `,
};
