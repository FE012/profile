import styled from "styled-components";
import Information from "../components/Resume/Information";
import Introduce from "../components/Resume/Introduce";
import Profile from "../components/Resume/Profile";
import Project from "../components/Resume/Project";
import Skills from "../components/Resume/Skills";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 70px 100px 70px 100px;
`;

function Resume() {
  return (
    <Wrapper>
      {/* 프로필 사진과 소개말 */}
      <Profile />
      {/* 개인정보 */}
      <Information />
      {/* 자기소개 */}
      <Introduce />
      {/* 기술 스택 */}
      <Skills></Skills>
      {/* 프로젝트 */}
      <Project></Project>
    </Wrapper>
  );
}

export default Resume;
