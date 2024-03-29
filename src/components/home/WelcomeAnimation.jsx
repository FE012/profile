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
  p {
    margin-bottom: 10px;
    color: ${(props) => props.theme.accentColor};
  }
`;

const NameBox = styled.div`
  text-align: center;
  font-weight: var(--medeum-weight);
  font-size: var(--big-font);
  margin-bottom: 20px;
  @media screen and (max-width: 800px) {
    font-size: var(--subtitle-font);
  }
`;

const TypewriterWithCustomStyle = styled(Typewriter)`
  color: ${(props) => props.theme.accentColor};
`;

const LinkBox = styled.div`
  font-size: var(--subtitle-font);
  font-weight: var(--medeum-weight);
  :hover {
    color: var(--point-color);
    background-color: var(--main-color);
    border-radius: 5px;
  }
  @media screen and (max-width: 800px) {
    font-size: var(--main-font);
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
          <p>배움과 성장을 추구하는</p>
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
        transition={{ delay: 2 }}
      >
        <LinkBox>
          <Link to="/resume">Click!</Link>
        </LinkBox>
      </motion.div>
    </Section>
  );
}

export default WelcomeAnimation;
