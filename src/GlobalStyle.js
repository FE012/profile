import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800");
:root {
   /*Color*/
    --main-color: #eeeeee;
    --point-color: #0171E2;
    --dark-color: #181617;
    /* FontSize */
    --main-font : 1.1rem;
    --title-font : 1.8rem;
    --subtitle-font: 1.4rem;
    --big-font: 3.5rem;
    /* FontWeight*/
    --regular-weight: 400;
    --medeum-weight: 700;
    --bold-weight: 800;
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
  overflow-x :  hidden;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  font-family: Nanum Gothic;
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

a {
  text-decoration:none;
  color:inherit;
}

`;

export default GlobalStyle;
