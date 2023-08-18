import { Link } from "react-router-dom";
import styled from "styled-components";
import profileEmage from "../assests/image/profileEmage.png";
import reactLogo from "../assests/image/reactLogo.png";
import reactQueryLogo from "../assests/image/reactQueryLogo.png";
import recoilLogo from "../assests/image/recoilLogo.png";
import jsLogo from "../assests/image/jsLogo.png";
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
  background-image: url(${profileEmage});
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
  h2 {
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-size: var(--title-font);
    border-bottom: 2px solid var(--main-color);
  }
  p {
    font-size: var(--main-font);
    font-weight: var(--regular-weight);
    margin-bottom: 1rem;
    line-height: 1.3;
  }
`;

const SkillBox = styled.section`
  h2 {
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-size: var(--title-font);
    border-bottom: 2px solid var(--main-color);
  }
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;
const ProjectBox = styled.section``;

const ProjectImg = styled.div``;

function Resume() {
  return (
    <Wrapper>
      <Banner>
        <Profile></Profile>
        <Name>몰입을 즐기는 프론트엔드 개발자, 김예본입니다.</Name>
      </Banner>
      <InfoBox>
        <div>📧 twte96@gmail.com</div>
        <Link to="https://github.com/FE012">👩🏻‍💻 Github</Link>
        <Link to="https://velog.io/@developer09">🏠 Blog</Link>
        <div>📱Phone: 010-4128-5209</div>
      </InfoBox>
      <IntroduceBox>
        <h2>😊 자기소개</h2>
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
          동료와의 협업과 함께 성장하는 것을 중요하게 생각합니다. 팀 프로젝트를
          진행할 때에도 매일 2번 스탠드 업 미팅 시간을 가지며, 맡은 업무의 진척
          상황을 공유하고 팀원 간의 의견을 조율해나갔습니다.
        </p>
      </IntroduceBox>
      <SkillBox>
        <Skills></Skills>
      </SkillBox>
      <ProjectBox>
        <h2>📂 프로젝트</h2>
        <article>
          <section>
            <ProjectImg />
            <button>깃헙</button>
            <button>노션</button>
            <button>👆🏼보러가기</button>
            <button>구현한 페이지 보기</button>
          </section>
          <section>
            <h3> 우리만의 공간 azit [팀프로젝트] </h3>
            <h4> 작업 기간: 2023.01~2023.02</h4>
            <div>
              코드스테이츠 과정에서 팀 프로젝트로 제작된 같은 취미를 찾아서
              취미를 공유하는 플랫폼입니다. 유저 마이페이지, 프로필 수정페이지,
              유저 신고페이지를 담당해 개발하였습니다.
            </div>
            <h4>React, Styled-components, Axios, React-query, Redux </h4>
          </section>
        </article>
        <article>
          <section>
            <ProjectImg />
            <button>깃헙</button>
            <button>블로깅</button>
            <button>👆🏼보러가기</button>
          </section>
          <section>
            <h3> 암포화폐 시세조회 웹 </h3>
            <h4> 작업 기간 : 2023.05 </h4>
            <div>
              실시간으로 암호화폐의 시세를 조회할 수 있는 웹을 만들었습니다.
              암호화폐 목록들을 보여줄때, react-query의 useInfiniteQuery hook을
              사용한 Infinite Scroll 기능과 다크/라이트모드 기능을 추가했습니다.
            </div>
            <h4>React,TypeScript,React-query,Styled-components</h4>
          </section>
        </article>
        <article>
          <section>
            <ProjectImg />
            <button>깃헙</button>
            <button>블로깅</button>
            <button>👆🏼보러가기</button>
          </section>
          <section>
            <h3>recoil todo</h3>
            <h4>작업 기간 : 2023.05</h4>
            <div>
              recoil을 사용한 To Do List를 만들었습니다. 다양한 카테고리를
              생성할 수 있고, CRUD기능을 구현했습니다.
            </div>
            <h4>React,TypeScript,Recoil,Styled-components</h4>
          </section>
        </article>
      </ProjectBox>
    </Wrapper>
  );
}

export default Resume;
