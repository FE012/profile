import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  background-color: ${(props) => props.theme.bgColor};
  h1 {
    margin-bottom: 10px;
    color: ${(props) => props.theme.accentColor};
  }
`;

const NameBox = styled.div`
  text-align: center;
  font-weight: var(--bold-weight);
  font-size: var(--big-font);
  margin-bottom: 15px;
  @media screen and (max-width: 790px) {
    font-size: var(--subtitle-font);
  }
`;

const TypewriterWithCustomStyle = styled(Typewriter)`
  color: ${(props) => props.theme.accentColor};
`;

const LinkBox = styled.div`
  font-size: var(--main-font);
  font-weight: var(--bold-weight);
  :hover {
    color: var(--point-color);
  }
  @media (max-width: 790px) {
    font-size: var(--small-font);
  }
`;

function WelcomeAnimation() {
  return (
    <Section>
      <NameBox>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.0 }}
          style={{ color: "var(--point-color)" }}
        >
          <h1>웹을 통해 아이디어를 현실로 만드는</h1>
          <TypewriterWithCustomStyle
            words={["", "프론트엔드 개발자 김예본입니다."]}
            cursor
            cursorStyle="|"
            delaySpeed={500}
            typeSpeed={200}
          />
        </motion.div>
      </NameBox>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <LinkBox>
          <Link to="/resume">Resume</Link>
        </LinkBox>
      </motion.div>
    </Section>
  );
}

export default WelcomeAnimation;
