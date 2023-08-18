import styled from "styled-components";
import { skillsData } from "../data.js/skillsData";

const LogoImg = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
`;

const SkillBox = styled.section`
  h2 {
    padding-bottom: 10px;
    margin-bottom: 25px;
    font-size: var(--title-font);
    border-bottom: 2px solid var(--main-color);
  }
  ul li {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
  div {
    font-size: var(--main-font);
    h3 {
      margin-bottom: 10px;
      font-weight: var(--bold-weight);
    }
  }
`;

//console.log(skillsData);

function Skills() {
  return (
    <SkillBox>
      <h2>🛠 기술 스택</h2>
      {skillsData.map((skill) => (
        <>
          <ul>
            <li>
              <LogoImg src={skill.logoImg} />
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.content}</p>
              </div>
            </li>
          </ul>
        </>
      ))}
    </SkillBox>
  );
}

export default Skills;
