import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Headers from "./components/Headers";
import GlobalStyle from "./GlobalStyle";
import Home from "./page/Home";
import Resume from "./page/Resume";
import { darkTheme, lightTheme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

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
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((current) => !current);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Headers />
        <Button onClick={toggleDark}>
          {isDark ? (
            <FontAwesomeIcon icon={faMoon} size="2xl" />
          ) : (
            <FontAwesomeIcon icon={faSun} size="2xl" />
          )}
        </Button>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
