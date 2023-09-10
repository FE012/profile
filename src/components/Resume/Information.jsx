import styled from "styled-components";

const InfoBox = styled.article`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: underline;
  font-weight: var(--bold-weight);
`;

function Information() {
  return (
    <InfoBox>
      <div>📧 twte96@gmail.com</div>
      <a
        href="https://github.com/FE012"
        target="_blank"
        rel="noopener noreferrer"
      >
        👩🏻‍💻 GitHub
      </a>
      <a href="https://velog.io/@developer09" target="_blank" rel="noreferrer">
        🏠 Blog
      </a>
      <div>📱 010-4128-5209</div>
    </InfoBox>
  );
}

export default Information;
