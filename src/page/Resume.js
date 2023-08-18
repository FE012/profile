import { Link } from "react-router-dom";
import styled from "styled-components";
import profileImg from "../assests/image/profileImg.png";
import Project from "../components/Project";
import Skills from "../components/Skills";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 70px 100px 70px 100px;
`;

const Banner = styled.section`
  margin-top: 35px;
`;
const Profile = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${profileImg});
  background-size: cover;
  margin-bottom: 35px;
`;
const Name = styled.h1`
  font-size: var(--big-font);
  margin-bottom: 35px;
  font-weight: var(--bold-weight);
`;

const InfoBox = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: underline;
  font-weight: var(--medeum-weight);
`;

const IntroduceBox = styled.section`
  margin-top: 35px;
  margin-bottom: 35px;
  p {
    font-size: var(--main-font);
    font-weight: var(--regular-weight);
    margin-bottom: 1rem;
    line-height: 1.3;
  }
`;

const Title = styled.h2`
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-size: var(--title-font);
  border-bottom: 2px solid var(--main-color);
`;

function Resume() {
  return (
    <Wrapper>
      {/* 프로필 사진과 이름 */}
      <Banner>
        <Profile></Profile>
        <Name>몰입을 즐기는 프론트엔드 개발자, 김예본입니다.</Name>
      </Banner>
      {/* 개인 정보 */}
      <InfoBox>
        <div>📧 twte96@gmail.com</div>
        <Link to="https://github.com/FE012">👩🏻‍💻 Github</Link>
        <Link to="https://velog.io/@developer09">🏠 Blog</Link>
        <div>📱 010-4128-5209</div>
      </InfoBox>
      {/* 자기소개 */}
      <IntroduceBox>
        <Title>😊 자기소개</Title>
        <p>
          다양한 사용자들에게 좋은 경험을 전달하고 싶은 마음에 개발자란 직업에
          관심을 갖게 되었습니다.
        </p>
        <p>
          사용자 친화적 개발 능력을 배우기 위해서 웹 개발 부트 캠프인
          코드스테이츠 프론트엔드 과정을 수료했고, 수료 이후엔 Typescript를 학습
          중입니다.
        </p>
        <p>
          새로운 기술 학습에도 관심이 많지만, 기술과 문제의 근본을 좀 더 깊이
          있게 파보는 걸 좋아하는 편입니다.
        </p>
        <p>
          동료와의 협업과 함께 소통하는 것을 중요하게 생각합니다. 팀 프로젝트를
          진행할 때에도 매일 2번 스탠드 업 미팅 시간을 가지며, 맡은 업무의 진척
          상황을 공유하고 팀원 간의 의견을 조율해나갔습니다.
        </p>
      </IntroduceBox>
      {/* 기술 스택 */}
      <Skills></Skills>
      {/* 프로젝트 */}
      <Project></Project>
    </Wrapper>
  );
}

export default Resume;
