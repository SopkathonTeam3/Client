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
    width: 100%;
    height: 100vh;
  `,
  userInfoText: styled.div`
    margin: 81px;
    color: ${({ theme }) => theme.color.black};
    & > p {
      ${({ theme }) => theme.text.subtitle1};
    }
  `,
  userNameInput: styled.input`
    background-color: grey;
  `,
  userSubmitBtn: styled.button`
    border: none;
  `,
};
