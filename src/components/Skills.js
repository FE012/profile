import styled from "styled-components";
import { skillsData } from "../data.js/skillsData";

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;

console.log(skillsData);

function Skills() {
  return (
    <>
      <h2>🛠 기술 스택</h2>
      {skillsData.map((skill) => (
        <>
          <ul>
            <li>
              <LogoImg src={skill.logoImg} />
              <div>
                <span>{skill.name}</span>
                <p>{skill.content}</p>
              </div>
            </li>
          </ul>
        </>
      ))}
    </>
  );
}

export default Skills;
