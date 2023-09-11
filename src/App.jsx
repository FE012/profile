import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import { darkTheme, lightTheme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "./Recoil/atoms";
import { useEffect } from "react";

const Button = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.toggleBgColor};
  color: ${(props) => props.theme.accentColor};
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDark = () => setDarkAtom((prev) => !prev);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <Button onClick={toggleDark}>
        {isDark ? (
          <FontAwesomeIcon icon={faMoon} size="2xl" />
        ) : (
          <FontAwesomeIcon icon={faSun} size="2xl" />
        )}
      </Button>
    </ThemeProvider>
  );
}

export default App;
