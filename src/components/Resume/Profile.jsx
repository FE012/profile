import styled from "styled-components";
import profileImg from "../../assests/image/profileImg.png";

const ProfileBox = styled.article`
  display: flex;
  padding-top: 50px;
  @media screen and (max-width: 790px) {
    display: flex;
    flex-direction: column;
  }
`;

const Photo = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${profileImg});
  background-size: cover;
  margin-right: 50px;
  @media screen and (max-width: 790px) {
    margin-bottom: 50px;
  }
`;

const Name = styled.h1`
  font-size: var(--title-font);
  margin-bottom: 35px;
  font-weight: var(--bold-weight);
`;

const InfoBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Info = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: underline;
  font-weight: var(--bold-weight);
`;

function Profile() {
  return (
    <ProfileBox>
      <Photo />
      <InfoBox>
        <Name> 🙌 프론트엔드 개발자 김예본입니다.</Name>
        <Info>
          <p>📧 twte96@gmail.com</p>
          <a
            href="https://github.com/FE012"
            target="_blank"
            rel="noopener noreferrer"
          >
            👩🏻‍💻 GitHub
          </a>
          <a
            href="https://velog.io/@developer09"
            target="_blank"
            rel="noreferrer"
          >
            🏠 Blog
          </a>
          <p>📱 010-4128-5209</p>
        </Info>
      </InfoBox>
    </ProfileBox>
  );
}

export default Profile;
