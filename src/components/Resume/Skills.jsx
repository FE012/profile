import styled from "styled-components";
import { skillsData } from "../../data/skillsData";
import { Title } from "../Resume/Title";

const LogoImg = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
`;

const SkillsBox = styled.article`
  margin-bottom: 25px;
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
      color: var(--point-color);
    }
  }
`;

//console.log(skillsData);

function Skills() {
  return (
    <SkillsBox>
      <Title>🛠 기술 스택</Title>
      {skillsData.map((skill) => (
        <section key={skill.id}>
          <ul>
            <li>
              <LogoImg src={skill.logoImg} />
              <div>
                <h3>{skill.name}</h3>
                {/* <p>
                  {makeTextBold(skill.content, ["특정텍스트1", "특정텍스트2", "특정텍스트3"])}
                </p> */}
                <p>{skill.content}</p>
              </div>
            </li>
          </ul>
        </section>
      ))}
    </SkillsBox>
  );
}

export default Skills;
