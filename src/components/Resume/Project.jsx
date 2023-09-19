import styled from "styled-components";
import { projectData } from "../../data/projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Title } from "../Resume/Title";
import MakeTextBold from "../../utils/MakeTextBold.jsx";

const ProjectBox = styled.article`
  display: flex;
  border-bottom: 1px solid var(--main-color);
  margin-bottom: 40px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
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

const LeftSection = styled.section`
  margin-right: 30px;
  @media print {
    width: 30%;
  }
`;

const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 400px;
  @media screen and (max-width: 800px) {
    > * {
      margin-bottom: 10px;
    }
  }
  @media print {
    > * {
      margin-bottom: 10px;
    }
  }
`;

const ProjectImg = styled.img`
  width: 400px;
  @media screen and (max-width: 800px) {
    margin-bottom: 10px;
  }
  @media print {
    width: 100%;
  }
`;

const Name = styled.h3`
  font-size: var(--subtitle-font);
`;

const Summary = styled.h4``;

const Period = styled.h4`
  color: #61677a;
`;

const Position = styled.h4`
  color: #61677a;
`;

const Planning = styled.ul`
  font-weight: var(--bold-weight);
  li {
    font-weight: var(--regular-weight);
    list-style-type: disc;
    margin-left: 15px;
    margin-top: 10px;
  }
`;

const Skills = styled.h5`
  color: var(--point-color);
  padding-bottom: 5px;
  border-bottom: 1px solid var(--main-color);
  font-size: 1.1rem;
`;

const Realization = styled.ul`
  font-weight: var(--bold-weight);
  li {
    font-weight: var(--regular-weight);
    list-style-type: disc;
    margin-left: 15px;
    margin-top: 10px;
  }
`;

function Project() {
  return (
    <>
      <Title>
        <span>📂</span> 프로젝트
      </Title>
      {projectData.map((project, id) => (
        <ProjectBox key={id}>
          <LeftSection>
            {project.id === 1 ? (
              <ProjectImg src={project.img} />
            ) : (
              <ProjectImg src={project.img} />
            )}
          </LeftSection>
          <RightSection>
            <div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </button>
              </a>
              <a
                href={project.pageView}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.id === 0 ? <button>구현한 페이지 보기</button> : ""}
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button>📎 배포</button>
              </a>
              <a href={project.vlog} target="_blank" rel="noopener noreferrer">
                {project.id === 0 ? <button>노션</button> : ""}
              </a>
            </div>
            <Name>{project.name}</Name>
            <Summary>[프로젝트 개요] {project.summary}</Summary>
            <Period> [작업 기간] {project.period}</Period>
            {project.position ? (
              <Position>[직책] {project.position}</Position>
            ) : (
              ""
            )}
            <Skills>{project.skills} </Skills>
            <Planning>
              {project.planning && project.planning.length > 0 ? (
                <Planning>
                  [기획 및 디자인]
                  {project.planning.map((planning, index) => (
                    <li key={index}>{planning}</li>
                  ))}
                </Planning>
              ) : (
                ""
              )}
            </Planning>
            <Realization>
              {project.realization && project.realization.length > 0 ? (
                <Realization>
                  [기능 구현]
                  {project.realization.map((realization, index) => (
                    <li key={index}>
                      <MakeTextBold>{realization}</MakeTextBold>
                    </li>
                  ))}
                </Realization>
              ) : (
                ""
              )}
            </Realization>
          </RightSection>
        </ProjectBox>
      ))}
    </>
  );
}

export default Project;
