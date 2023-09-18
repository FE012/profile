import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "./Recoil/atoms";
import { useEffect } from "react";
import Router from "../src/components/Router";
import { BrowserRouter } from "react-router-dom";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

// 라이트/다크 모드 버튼
const Button = styled.button`
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.toggleBgColor};
  color: ${(props) => props.theme.accentColor};
  @media print {
    display: none;
  }
`;

function App() {
  const darkMode = useRecoilValue(isDarkAtom);
  const setDarkMode = useSetRecoilState(isDarkAtom);

  // 로컬 스토리지에서 설정을 불러오기
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      // 로컬 스토리지에 값이 저장되어 있다면 해당 값으로 Recoil 상태를 초기화
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, [setDarkMode]);

  // 설정이 변경될 때 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDark = () => setDarkMode((prev) => !prev);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
        <Button onClick={toggleDark}>
          {darkMode ? (
            <BsFillMoonFill size="30" />
          ) : (
            <BsFillSunFill size="30" />
          )}
        </Button>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
