import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  border: none;
  min-height: calc(var(--vh, 1vh) * 100);
  max-width: var(--app-max-width, 375px);
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
function App() {
  const setScreenSize = () => {
    // vh 관련
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // window width 관련
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}px`);
  };

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
