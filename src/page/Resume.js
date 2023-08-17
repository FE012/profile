import styled from "styled-components";
import profileEmage from "../assests/image/profileEmage.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin: 70px 150px 70px 150px;
`;

const Banner = styled.div``;
const Profile = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
  background-image: url(${profileEmage});
  background-size: cover;
`;
const Name = styled.div``;

function Resume() {
  return (
    <Wrapper>
      <Banner>
        <Profile></Profile>
        <Name>김예본</Name>
      </Banner>
    </Wrapper>
  );
}

export default Resume;
