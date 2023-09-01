import styled from "styled-components";
import Information from "../components/Information";
import Introduce from "../components/Introduce";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Skills from "../components/Skills";

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
