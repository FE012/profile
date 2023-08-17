import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 15px;
  padding: 20px 55px;
  background-color: #eeeeee;
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
  font-size: 15px;
  font-weight: 700;
`;

function Headers() {
  return (
    <Nav>
      <Col>
        <Items>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="/resume">Resume</Link>
          </Item>
        </Items>
      </Col>
      <Col>프린트</Col>
    </Nav>
  );
}

export default Headers;
