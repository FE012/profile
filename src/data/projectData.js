import projectImg from "../assets/image/projectImg.png";
import coinImg from "../assets/image/coinImg.png";
import toDoImg from "../assets/image/toDoImg.png";
import NomflixImg from "../assets/image/nomflixImg.png";

export const projectData = [
  {
    id: 0,
    github: "https://github.com/FE012/seb41_main_004",
    vlog: "https://www.notion.so/codestates/azit-7c6d39f6bf2f4c72a1577f1e213d16b4",
    link: "http://azit-front.s3-website.ap-northeast-2.amazonaws.com/",
    pageView: "https://www.notion.so/fa7759d7bb2c4f38bcc3bdede4d0e2d6",
    img: projectImg,
    name: "우리만의 공간 azit [팀 프로젝트]",
    summary:
      "코드스테이츠에서 진행한 팀 프로젝트입니다. 같은 취미를 찾아서 취미를 공유하고, 모임 활동을 할 수 있는 플랫폼입니다.",
    period: "2023.01 ~ 2023.02 (4주, 프론트 4, 백엔드 3)",
    position: "프론트엔드 팀원",
    skills:
      "#React, #Styled-components, #React-query, #Axios, #Redux, #AWS(S3)",
    planning: [
      "notion으로 화면정의서를 작성하여 기획",
      "초기 프로토타입은 Figma를 사용해 디자인",
    ],
    realization: [
      "**유저 마이페이지, 프로필 수정 페이지, 유저 신고 페이지 담당 개발**",
      "수정 상태에 따라 버튼의 활성화 여부를 바꾸는 것이 적합하다 생각해서 input을 제어 컴포넌트로 구현했습니다.",
      "프로필 이미지 업로드 및 미리 보기 기능을 구현했습니다.",
      "React-query를 이용해 서버 상태를 관리했습니다.",
      "React-query로 로딩 상태에 따른 처리를 하여 사용자에게 빈 화면을 보여주지 않고, 로딩 컴포넌트를 보여줌으로써 UX를 향상시켰습니다.",
      "팀원들과 같이 사용할 수 있도록 공통 컴포넌트를 제작했습니다.",
      "버튼 컴포넌트를 제작해서 프로젝트의 기본적인 UI를 통일하기 쉽도록 구현했습니다.",
    ],
  },
  {
    id: 1,
    github: "https://github.com/FE012/react_nomflix",
    vlog: "",
    link: "https://fe012.github.io/react_nomflix/",
    pageView: "",
    img: NomflixImg,
    name: "Nomflix [개인]",
    summary: "실제 넷플릭스 사이트를 클론 코딩 했습니다.",
    period: "2023.5 (2주)",
    skills:
      "#React, #TypeScript, #React-query, #React-hook-form, #Styled-components, #Framer Motion",
    planning: [],
    realization: [
      "React-query를 사용해 영화정보 API 불러오기 구현",
      "TypeScript 적용",
      "영화 검색 기능 구현",
      "Framer Motion 을 사용한 로고, 검색 영역 등 애니메이션 구현",
      "영화 슬라이드 및 모달창 애니메이션 구현",
    ],
  },
  {
    id: 2,
    github: "https://github.com/FE012/react_crypto-tracker",
    vlog: "",
    link: "https://fe012.github.io/react_crypto-tracker/",
    img: coinImg,
    name: "Coin tracker [개인]",
    summary:
      "다양한 암호화폐들의 정보와 실시간 거래가격을 볼 수 있는 사이트를 만들었습니다. ",
    period: "2023.05 (1주)",
    skills: "#React, #TypeScript, #React-query, #Styled-components, #Recoil",
    realization: [
      "코인파프리카 API를 사용하여, 코인 정보 및 실시간 가격 불러오기 (React-query)",
      "Styled-components + recoil을 이용한 theme으로 라이트/다크 모드 구현",
      "ApexChart 라이브러리를 이용한 실시간 시세조회 Chart 구현",
      "React-router-dom을 사용하여 Tab UI 구현",
    ],
  },
  {
    id: 3,
    github: "https://github.com/FE012/recoil-to-do",
    vlog: "",
    link: "https://fe012.github.io/recoil-to-do/",
    img: toDoImg,
    name: "To Do List [개인]",
    summary:
      " Recoil을 사용한 To Do List를 만들었습니다. 사용자가 원하는 카테고리를 추가할 수 있습니다.",
    period: "2023.04(1주)",
    skills: "#React, #TypeScript, #Recoil, #Styled-components",
    realization: ["Recoil을 사용한 CRUD 구현", "분류 카테고리 추가 기능 구현"],
  },
];
