import styled from "styled-components";
import Defined from "../components/Resume/Defined";
import Education from "../components/Resume/Education";
import Introduce from "../components/Resume/Introduce";
import Profile from "../components/Resume/Profile";
import Project from "../components/Resume/Project";
import Skills from "../components/Resume/Skills";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 70px 100px;
  //resume page 반응형
  @media screen and (max-width: 790px) {
    margin: 70px 20px;
  }
`;

function Resume() {
  return (
    <Wrapper>
      {/* 프로필 사진과 정보 */}
      <Profile />
      {/* 자기소개-개발을 왜 하게 되었는지*/}
      <Introduce />
      {/* 교육 */}
      <Education />
      {/* 기술 스택 */}
      <Skills />
      {/* 자기소개-개발자로서 정의*/}
      <Defined />
      {/* 프로젝트 */}
      <Project />
    </Wrapper>
  );
}

export default Resume;
