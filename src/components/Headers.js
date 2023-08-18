import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 15px;
  padding: 20px 55px;
  background-color: var(--main-color);
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: 700;
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: blue;
`;

function Headers() {
  const pageSelect = useLocation();
  console.log(pageSelect);

  return (
    <Nav>
      <Col>
        <Items>
          <Item>
            <Link to="/">
              Home {pageSelect.pathname === "/" && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/resume">
              Resume
              {pageSelect.pathname === "/resume" && (
                <Circle layoutId="circle" />
              )}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Items>
          <Item>프린트</Item>
          <Item>
            <Link to="https://github.com/FE012/resume">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </Link>
          </Item>
        </Items>
      </Col>
    </Nav>
  );
}

export default Headers;
