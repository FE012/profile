import reactLogo from "../assets/image/reactLogo.png";
import recoilLogo from "../assets/image/recoilLogo.png";
import jsLogo from "../assets/image/jsLogo.png";
import htmlLogo from "../assets/image/htmlLogo.png";
import cssLogo from "../assets/image/cssLogo.png";
import reduxLogo from "../assets/image/reduxLogo.png";
import styledComponentsLogo from "../assets/image/styledComponentsLogo.png";

export const skillsData = [
  {
    id: 0,
    logoImg: jsLogo,
    name: "JavaScript",
    content:
      "구조 분해 할당, spread 구문 등 **ES6 문법 사용**과 주요 Array 내장 메서드에 사용에 익숙합니다.",
  },
  {
    id: 1,
    logoImg: reactLogo,
    name: "React",
    content:
      "Virtual DOM을 이해하고 있으며 **컴포넌트의 재사용**과 **유지 보수의 향상**을 위해 컴포넌트 단위로 코드를 작성합니다. useState, useEffect, useRef 같은 기본적인 hook 사용에 능숙합니다. ",
  },
  {
    id: 2,
    logoImg: recoilLogo,
    name: "Recoil",
    content: "recoil을 사용하여 간단하게 **전역 상태를 관리**할 수 있습니다.",
  },
  {
    id: 3,
    logoImg: reduxLogo,
    name: "Redux",
    content: "flux 패턴의 기본적인 동작 원리를 이해하고 있습니다.",
  },
  {
    id: 4,
    logoImg: styledComponentsLogo,
    name: "Styled-components",
    content:
      "**상태 변수**를 공유해 **조건부 렌더링**을 할 수 있는 장점을 적극적으로 활용하며, ThemeProvider로 공통 스타일 속성 관리를 할 수 있습니다.",
  },
  {
    id: 5,
    logoImg: htmlLogo,
    name: "HTML5",
    content:
      "div 태그를 사용하기 보다 때에 맞는 **Semantic 태그**를 사용해 **웹 접근성**을 향상시키는 마크업을 작성합니다.",
  },
  {
    id: 6,
    logoImg: cssLogo,
    name: "CSS3",
    content:
      " 적절한 **css 선택자와 css 변수**를 사용할 수 있고, flexBox, position 속성을 활용해 레이아웃을 구성할 수 있습니다. 웹을 **반응형**으로 만들 수 있습니다.",
  },
];
