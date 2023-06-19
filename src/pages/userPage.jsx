import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import user_smile from '../assets/svgs/user_smile.svg';

const UserPage = () => {
  const [userName, setUserName] = useState();
  const [isClickable, setIsClickable] = useState();
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleInputChange = () => {
    if (inputRef !== '') {
      setIsClickable(true);
    }
    setUserName(inputRef.current.value);
  };

  const handleUserSubmit = () => {
    userName && localStorage.setItem('userName', userName);
    navigate('/custom');
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      handleUserSubmit();
    }
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
      <St.userInfoIcon src={user_smile} />
      <St.userNameInput ref={inputRef} onChange={handleInputChange} onKeyDown={handleEnter} />
      <St.userSubmitBtn isClickable={isClickable} onClick={handleUserSubmit}>
        다음으로
      </St.userSubmitBtn>
    </St.userPageWrapper>
  );
};

export default UserPage;

const St = {
  userPageWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
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
      ${({ theme }) => theme.text.subtitle0};
      text-align: center;
    }
  `,
  userInfoIcon: styled.img``,
  userNameInput: styled.input`
    height: 57px;
    width: 303px;
    margin: 51px 0 48px 0;
    background-color: ${({ theme }) => theme.color.gray50};
    ${({ theme }) => theme.text.subtitle1};
    padding: 20px;
  `,
  userSubmitBtn: styled.button`
    width: 126px;
    height: 64px;
    border: none;
    color: white;
    background-color: ${({ isClickable, theme }) =>
      isClickable ? theme.color.black : theme.color.gray100};
    border-radius: 40px;
    ${({ theme }) => theme.text.subtitle2};
  `,
};
