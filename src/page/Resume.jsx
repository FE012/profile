import styled from "styled-components";
import Defined from "../components/Resume/Defined";
import Education from "../components/Resume/Education";
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
      {/* 자기소개-개발을 왜 하게 되었는지*/}
      <Introduce />
      {/* 자기소개-개발자로서 정의*/}
      <Defined />
      {/* 기술 스택 */}
      <Skills />
      {/* 프로젝트 */}
      <Project />
      {/* 교육 */}
      <Education />
    </Wrapper>
  );
}

export default Resume;
