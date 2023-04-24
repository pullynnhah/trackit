import { useContext } from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function logout() {
    setUser(null);
    window.localStorage.removeItem("trackit");
    navigate("/");
  }

  return (
    <StyledHeader>
      <h1 onClick={() => navigate("/today")}>TrackIt</h1>
      <img src={user.image} alt={user.name} onDoubleClick={logout} />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100vw;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;

  position: fixed;
  left: 0;
  top: 0;

  background: #126ba5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    color: #fff;
    font: 39px/49px "Playball", cursive;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
