import styled from "styled-components";

const ProjectBox = styled.section``;

const ProjectImg = styled.div``;

const Title = styled.h2`
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-size: var(--title-font);
  border-bottom: 2px solid var(--main-color);
`;

function Project() {
  return (
    <ProjectBox>
      <Title>📂 프로젝트</Title>
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
            코드스테이츠 과정에서 팀 프로젝트로 제작된 같은 취미를 찾아서 취미를
            공유하는 플랫폼입니다. 유저 마이페이지, 프로필 수정페이지, 유저
            신고페이지를 담당해 개발하였습니다.
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
            recoil을 사용한 To Do List를 만들었습니다. 다양한 카테고리를 생성할
            수 있고, CRUD기능을 구현했습니다.
          </div>
          <h4>React,TypeScript,Recoil,Styled-components</h4>
        </section>
      </article>
    </ProjectBox>
  );
}

export default Project;
