import styled from "styled-components";
import { DefinedData } from "../../data/DefinedData";
import { Title } from "./Introduce";

const IntroduceBox = styled.section`
  margin-top: 35px;
  margin-bottom: 35px;
  li {
    font-size: var(--main-font);
    font-weight: var(--regular-weight);
    margin-bottom: 1rem;
    line-height: 1.5;
    list-style-type: disc;
    margin-left: 15px;
  }
  h3 {
    font-size: var(--subtitle-font);
    margin-bottom: 10px;
  }
`;

function Defined() {
  return (
    <IntroduceBox>
      <Title>🙌 저는 이런 개발자입니다</Title>
      {DefinedData.map((data, id) => (
        <>
          <h3>{data.title}</h3>
          <ul>
            <li>{data.content1}</li>
            {data.content2 && data.id !== 2 ? <li>{data.content2}</li> : ""}
            {data.content2 && data.id === 2 ? (
              <a href={data.content2}> 👉🏼 블로그</a>
            ) : (
              ""
            )}
          </ul>
        </>
      ))}
    </IntroduceBox>
  );
}

export default Defined;
