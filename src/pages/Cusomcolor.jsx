import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import color1 from '../assets/img/color1.png';
import color2 from '../assets/img/color2.png';
import color3 from '../assets/img/color3.png';

const Cusomcolor = () => {
  const [ispick, setIsPick] = useState('');
  const [picked, setPicked] = useState('');
  const colorRef = useRef([]);

  useEffect(() => {
    colorRef.current = colorRef.current.slice(0, 3);
  });

  const handleSelectColor = e => {
    const selectedColor = e.target.alt;
    setIsPick(true);
    setPicked(selectedColor);

    colorRef.current.forEach(ref => {
      if (ref.alt !== selectedColor) {
        ref.classList.add('blur');
      }
    });
  };

  return (
    <St.CustomPageWrapper>
      <St.CustomTitle>
        <p>윤여진님의 </p>
        <p>바다를 골라주세요</p>
      </St.CustomTitle>

      <St.ColorPickWrapper>
        <St.ColorSelect
          className={`color-select ${picked === 'color1' || picked === '' ? '' : 'blur'}`}
          onClick={handleSelectColor}
          src={color1}
          alt="color1"
          picked={picked === 'color1'}
          ref={el => (colorRef.current[0] = el)}
        />
        <St.ColorSelect
          className={`color-select ${picked === 'color2' || picked === '' ? '' : 'blur'}`}
          onClick={handleSelectColor}
          src={color2}
          alt="color2"
          picked={picked === 'color2'}
          ref={el => (colorRef.current[1] = el)}
        />
        <St.ColorSelect
          className={`color-select ${picked === 'color3' || picked === '' ? '' : 'blur'}`}
          onClick={handleSelectColor}
          src={color3}
          alt="color3"
          picked={picked === 'color3'}
          ref={el => (colorRef.current[2] = el)}
        />
      </St.ColorPickWrapper>

      <St.NextBtn ispick={picked}>다음으로</St.NextBtn>
    </St.CustomPageWrapper>
  );
};

export default Cusomcolor;

const St = {
  CustomPageWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
  `,

  CustomTitle: styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    ${({ theme }) => theme.text.subtitle0};
  `,

  ColorPickWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 1.2rem;
  `,

  ColorSelect: styled.img`
    width: 9.3rem;
    height: 12.9rem;
    transition: filter 0.3s;
    &.blur {
      filter: blur(4px);
    }
  `,

  NextBtn: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 12.6rem;
    height: 6.4rem;

    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.text.subtitle2};
    background-color: ${({ ispick, theme }) => (ispick ? theme.color.black : theme.color.gray100)};

    margin-top: 4.8rem;
    border-radius: 40px;
  `,
};
