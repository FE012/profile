import styled from "styled-components";
import profileImg from "../../assests/image/profileImg.png";

const Section = styled.section`
  margin-top: 35px;
`;
const Photo = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${profileImg});
  background-size: cover;
  margin-bottom: 35px;
`;
const Name = styled.h1`
  font-size: var(--title-font);
  margin-bottom: 35px;
  font-weight: var(--bold-weight);
`;

function Profile() {
  return (
    <Section>
      <Photo />
      <Name> 프론트엔드 개발자 김예본입니다.</Name>
    </Section>
  );
}

export default Profile;
