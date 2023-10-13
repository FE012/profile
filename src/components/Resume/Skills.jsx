import styled from "styled-components";
import { skillsData } from "../../data/skillsData";
import { Title } from "../Resume/Title";
import MakeTextBold from "../../utils/MakeTextBold.jsx";

const LogoImg = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
`;

const SkillsBox = styled.article`
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
                {/* 특정 글씨 진하게 처리하는 함수 */}
                <MakeTextBold>{skill.content}</MakeTextBold>
              </div>
            </li>
          </ul>
        </section>
      ))}
    </SkillsBox>
  );
}

export default Skills;
