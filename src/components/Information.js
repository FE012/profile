import { Link } from "react-router-dom";
import styled from "styled-components";

const InfoBox = styled.section`
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: underline;
  font-weight: var(--medeum-weight);
`;

function Information() {
  return (
    <InfoBox>
      <div>📧 twte96@gmail.com</div>
      <Link to="https://github.com/FE012">👩🏻‍💻 Github</Link>
      <Link to="https://velog.io/@developer09">🏠 Blog</Link>
      <div>📱 010-4128-5209</div>
    </InfoBox>
  );
}

export default Information;
