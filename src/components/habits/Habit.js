import { useContext } from "react";
import { IconContext } from "react-icons";
import { BsTrash } from "react-icons/bs";
import styled from "styled-components";

import { UserContext } from "../../contexts/UserContext";
import { deleteHabit } from "../../services/api";
import Weekdays from "./Weekdays";

export default function Habit({ id, name, days, getHabits }) {
  const {
    user: { token }
  } = useContext(UserContext);

  function removeHabit(id) {
    if (window.confirm("Deseja mesmo deletar este hábito?")) {
      deleteHabit(id, token)
        .then(getHabits)
        .catch(err => alert(err.response.data.message));
    }
  }
  return (
    <Container>
      <p>{name}</p>
      <Weekdays selectedIds={days} />
      <IconContext.Provider value={{ color: "#666", size: "15px" }}>
        <Wrapper onClick={() => removeHabit(id)}>
          <BsTrash />
        </Wrapper>
      </IconContext.Provider>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 91px;
  background: #fff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 5%;
  position: relative;

  gap: 8px;

  p {
    color: #666;
    font-size: 18px;
    line-height: 22px;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;