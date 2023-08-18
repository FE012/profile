import projectImg from "../assests/image/projectImg.png";

export const projectData = [
  {
    id: 0,
    github: "",
    notion: "",
    link: "",
    img: projectImg,
    name: "우리만의 공간 azit [팀프로젝트]",
    period: "2023.01 ~ 2023.02",
    content:
      "코드스테이츠 과정에서 팀 프로젝트로 제작된 같은 취미를 찾아서 취미를 공유하는 플랫폼입니다. 프론트엔드 팀원으로서 유저 마이페이지, 프로필 수정페이지, 유저 신고페이지를 담당해 개발하였습니다.",
    skills: "React, Styled-components, Axios, React-query, Redux",
  },
  {
    id: 1,
    link: "",
    img: "",
    name: "coin trackers [개인]",
    period: "2023.05",
    content:
      "실시간으로 암호화폐의 시세를 차트로 조회할 수 있는 웹을 만들었습니다. 암호화폐 목록들을 보여줄때, react-query의 useInfiniteQuery hook을 사용한 Infinite Scroll 기능과 다크/라이트모드 기능을 추가했습니다.",
    skills: "React,TypeScript,React-query,Styled-components,ApexCharts",
  },
  {
    id: 2,
    link: "",
    img: "",
    name: "recoil todo [개인]",
    period: "2023.05",
    content:
      "recoil을 사용한 To Do List를 만들었습니다. 다양한 카테고리를 생성할 수 있고, CRUD기능을 구현했습니다.",
    skills: "React,TypeScript,Recoil,Styled-components",
  },
];
