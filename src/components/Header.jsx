import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: var(--subtitle-font);
  padding: 20px;
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.textColor};
  border-bottom: 1px solid var(--main-color);
  @media print {
    display: none !important;
  }
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
  margin: 0px 15px;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  &:hover {
    color: var(--point-color);
    cursor: pointer;
  }
`;

const HeartIcon = styled(motion(FontAwesomeIcon))`
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: -8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: var(--point-color);
`;

function Header() {
  const pageSelect = useLocation();

  return (
    <Nav>
      <Col>
        <Items>
          <Item>
            <Link to="/">
              Home{" "}
              {pageSelect.pathname === "/" && (
                <HeartIcon icon={faHeart} layoutId="circle" />
              )}
            </Link>
          </Item>
          <Item>
            <Link to="/resume">
              Resume{" "}
              {pageSelect.pathname === "/resume" && (
                <HeartIcon icon={faHeart} layoutId="circle" />
              )}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Items>
          {/* <Item>프린트</Item> */}
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

export default Header;
