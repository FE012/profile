import { Link } from "react-router-dom";
import styled from "styled-components";
import profileEmage from "../assests/image/profileEmage.png";
import ReactLogo from "../assests/image/ReactLogo.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin: 70px 150px 70px 150px;
`;

const Banner = styled.section``;
const Profile = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
  background-image: url(${profileEmage});
  background-size: cover;
`;
const Name = styled.h1``;

const InfoBox = styled.div``;

const IntroduceBox = styled.section``;

const SkillStack = styled.section``;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;
const ProjectBox = styled.section``;

function Resume() {
  return (
    <Wrapper>
      <Banner>
        <Profile></Profile>
        <Name>몰입을 즐기는 개발자, 김예본입니다.</Name>
      </Banner>
      <InfoBox>
        <Link to="https://github.com/FE012">👩🏻‍💻 Github</Link>
        <Link to="https://github.com/FE012">🏠 Blog</Link>
        <div to="https://github.com/FE012">📧 Email: twte96@gmail.com</div>
        <div>📱Phone: 010-4128-5209</div>
      </InfoBox>
      <IntroduceBox>
        <h2>😊 자기소개</h2>
        <div>
          다양한 사용자들에게 좋은 경험을 전달하고 싶은 마음에 개발자란 직업에
          관심을 갖게 되었습니다. 사용자 친화적 개발 능력을 배우기 위해서 웹
          개발 부트 캠프인 코드스테이츠 프론트엔드 과정을 수료했고, 수료 이후엔
          Typescript를 학습 중입니다. 새로운 기술 학습에도 관심이 많지만, 기술과
          문제의 근본을 좀 더 깊이 있게 파보는 걸 좋아하는 편입니다.동료와의
          협업과 함께 성장하는 것을 중요하게 생각합니다. 팀 프로젝트를 진행할
          때에도 매일 2번 스탠드 업 미팅 시간을 가지며, 맡은 업무의 진척 상황을
          공유하고 팀원 간의 의견을 조율해나갔습니다.
        </div>
      </IntroduceBox>
      <SkillStack>
        <h2>⚒ 기술 스택</h2>
        <ul>
          <li>
            <LogoImg src={ReactLogo} />
            <div>
              SPA 구현에 필요한 React Router를 이해하고, 웹 페이지에 SPA 기술을
              적용할 수 있습니다. 컴포넌트 재사용에 익숙하고 기본적인 hook
              사용에 능숙합니다.
            </div>
          </li>
          <li>
            <LogoImg src={ReactLogo} />
            <div>useQuery를 이용해 로딩 화면을 구현할 수 있습니다.</div>
          </li>
          <li>
            <LogoImg src={ReactLogo} />
            <div>
              복잡한 redux와 달리 간단한 recoil을 사용하여 전역 상태를 관리 할
              수 있습니다.
            </div>
          </li>
          <li>
            <LogoImg src={ReactLogo} />
            <div>
              es6 문법을 사용하는 것에 익숙하고 JavaScript의 동작 원리를
              이해하고 있습니다.
            </div>
          </li>
          <li>
            <LogoImg src={ReactLogo} />
            css 선택자와 flex 사용에 능숙하며, 웹을 반응형으로 만들수 있습니다.
            <div></div>
          </li>
          <li>
            <LogoImg src={ReactLogo} />
            <div>
              div 태그를 사용하기보다 상황에 맞는 시멘틱 태그를 사용하고, 시멘틱
              태그를 사용해야 하는 이유를 알고 있습니다.
            </div>
          </li>
        </ul>
      </SkillStack>
      <ProjectBox>
        <h2>📂 프로젝트</h2>
        <section>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </ProjectBox>
    </Wrapper>
  );
}

export default Resume;
