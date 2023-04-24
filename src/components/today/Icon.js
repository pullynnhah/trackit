import { useContext } from "react";

import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
import { IconContext } from "react-icons";

import { UserContext } from "../../contexts/UserContext";

import { toggleHabit } from "../../services/api";

export default function Icon({ id, done, getHabits }) {
  const {
    user: { token }
  } = useContext(UserContext);
  function toggleCheck() {
    toggleHabit(id, done, token)
      .then(getHabits)
      .catch(err => alert(err.response.data.message));
  }
  return (
    <IconContext.Provider value={{ color: "#fff", size: "69px" }}>
      <Wrapper done={done} onClick={toggleCheck}>
        <BsCheck />
      </Wrapper>
    </IconContext.Provider>
  );
}

const Wrapper = styled.div`
  width: 69px;
  height: 69px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => (props.done ? "#8FC549" : "#ebebeb")};
  border: 1px solid ${props => (props.done ? "#8FC549" : "#e7e7e7")};
  border-radius: 5px;
`;
