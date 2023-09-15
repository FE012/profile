import React from "react";
import styled from "styled-components";
import { Title } from "../Resume/Title";
import { EducationData } from "../../data/EducationData";

const EducationBox = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Ul = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 60px;
  gap: 10px;
  li {
    padding: 5px 5px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.grayBoxColor};
    font-size: var(--main-font);
    a {
      padding-bottom: 2px;
      font-weight: var(--bold-weight);
    }
  }
  /* 제목-과정,기간,수료 */
  li:first-of-type,
  li:nth-of-type(2),
  li:nth-of-type(3) {
    font-weight: var(--bold-weight);
    background-color: ${(props) => props.theme.toggleBgColor};
    border-radius: 5px;
  }
  /* 내용 */
  li:nth-child(3n) {
    display: flex;
    justify-content: center;
  }
  li:nth-child(3n + 1) {
    color: var(--point-color);
  }
  li:first-of-type {
    color: ${(props) => props.theme.textColor};
  }
`;

function Education() {
  return (
    <EducationBox>
      <Title>🎓 교육</Title>
      <Ul>
        <li>과정</li>
        <li>기간</li>
        <li>수료증</li>
        {EducationData.map((edu, id) => (
          <React.Fragment key={id}>
            <li>
              <a href={edu.site} target="_blank" rel="noreferrer">
                {edu.course}
              </a>
            </li>
            <li>
              {edu.period}&nbsp;
              {edu.id !== 4 ? (
                <a href={edu.vlog} target="_blank" rel="noreferrer">
                  📎블로깅
                </a>
              ) : (
                ""
              )}
            </li>
            <li>
              {edu.id !== 4 ? (
                <a href={edu.certificates} target="_blank" rel="noreferrer">
                  📎
                </a>
              ) : (
                ""
              )}
            </li>
          </React.Fragment>
        ))}
      </Ul>
    </EducationBox>
  );
}

export default Education;
