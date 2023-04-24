import styled from "styled-components";
import { Link } from "react-router-dom";

import CircularBar from "./CircularBar";

export default function Footer() {
  return (
    <StyledFooter>
      <NavLink to="/habits">Hábitos</NavLink>
      <NavLink to="/today">
        <CircularBar />
      </NavLink>
      <NavLink to="/history">Histórico</NavLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100vw;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;

  position: fixed;
  left: 0;
  bottom: 0;

  background: #fff;
`;

const NavLink = styled(Link)`
  font-size: 18px;
  line-height: 22px;

  color: #52b6ff;
`;
