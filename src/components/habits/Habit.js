import { useContext } from "react";

import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { IconContext } from "react-icons";

import { UserContext } from "../../contexts/UserContext";
import { TasksContext } from "../../contexts/TasksContext";

import Weekdays from "./Weekdays";

import { deleteHabit, getTodayHabits } from "../../services/api";

import { HabitTitle } from "../../styles/HabitTitle";

export default function Habit({ id, name, days, getHabits }) {
  const { setPercentage } = useContext(TasksContext);
  const {
    user: { token }
  } = useContext(UserContext);

  function removeHabit(id) {
    if (window.confirm("Deseja mesmo deletar este hábito?")) {
      deleteHabit(id, token)
        .then(res => {
          getHabits();
          getTodayHabits(token)
            .then(res => {
              setPercentage(
                res.data.length &&
                  Math.round((res.data.filter(habit => habit.done).length * 100) / res.data.length)
              );
            })
            .catch(err => alert(err.response.data.message));
        })
        .catch(err => alert(err.response.data.message));
    }
  }
  return (
    <Container>
      <HabitTitle>{name}</HabitTitle>
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
`;

const Wrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
