import styled from "styled-components";
import profileImg from "../../assets/image/profileImg.png";

const ProfileBox = styled.article`
  display: flex;
  padding-top: 50px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const Photo = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-right: 50px;
  @media screen and (max-width: 800px) {
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
  }
  @media print {
    display: none !important;
  }
`;

const Name = styled.h1`
  font-size: var(--title-font);
  margin-bottom: 35px;
  font-weight: var(--medeum-weight);
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
  font-weight: var(--medeum-weight);
`;

function Profile() {
  return (
    <ProfileBox>
      <Photo src={profileImg} alt="프로필이미지" />
      <InfoBox>
        <Name> 프론트엔드 개발자 김예본</Name>
        <Info>
          <a href="mailto:twte96@gmail.com">📧 twte96@gmail.com</a>
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
