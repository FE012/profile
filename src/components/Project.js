import { Link } from "react-router-dom";
import styled from "styled-components";
import { projectData } from "../data.js/projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectBox = styled.article`
  display: flex;
  margin-bottom: 35px;
  section:first-child {
    margin-right: 2rem;
  }

  section:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h3 {
      font-size: var(--subtitle-font);
    }
    h4 {
      color: #61677a;
    }
    p {
      font-size: var(--main-font);
    }
    h5 {
      color: var(--point-color);
    }
  }
  button {
    border: none;
    cursor: pointer;
    height: 40px;
    font-weight: var(--bold-weight);
    margin-right: 0.5rem;
  }
  a:first-child button {
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }
  a:nth-child(2) button {
    border-radius: 15%;
    height: 40px;
  }
  a:nth-child(3) button {
    border-radius: 15%;
  }
  a:nth-child(4) button {
    border-radius: 15%;
  }
  button:hover {
    background-color: var(--dark-color);
    color: var(--main-color);
  }
`;

const ProjectImg = styled.img`
  width: 250px;
  height: 400px;
`;

const Title = styled.h2`
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-size: var(--title-font);
  border-bottom: 2px solid var(--main-color);
`;

function Project() {
  return (
    <>
      <Title>📂 프로젝트</Title>
      {projectData.map((project) => (
        <ProjectBox key={project.id}>
          <section>
            <ProjectImg src={project.img} />
          </section>
          <section>
            <div>
              <Link to={project.github}>
                <button>
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </button>
              </Link>
              <Link to={project.vlog}>
                {project.id === 0 ? <button>노션</button> : ""}
              </Link>
              <Link to={project.link}>
                <button>📎 배포</button>
              </Link>
              <Link to={project.pageView}>
                {project.id === 0 ? <button>구현한 페이지 보기</button> : ""}
              </Link>
            </div>
            <h3>{project.name}</h3>
            <h4> 작업 기간: {project.period}</h4>
            <p>{project.content}</p>
            <h5>{project.skills} </h5>
          </section>
        </ProjectBox>
      ))}
    </>
  );
}

export default Project;
