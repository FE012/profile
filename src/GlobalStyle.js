import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
   /*Color*/
    --main-color: #eeeeee;
    --point-color: #0171E2;
    --dark-color: #181617;
    /* FontSize */
    --main-font : 1.1rem;
    --title-font : 2.0rem;
    --subtitle-font: 1.4rem;
    --big-font: 3.5rem;
    /* FontWeight*/
    --regular-weight: 400;
    --medeum-weight: 500;
    --bold-weight: 700;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Noto Sans', sans-serif;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  overflow-x :  hidden;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}

`;

export default GlobalStyle;
