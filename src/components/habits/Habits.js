import styled from "styled-components";

import Habit from "./Habit";

export default function Habits({ habits, getHabits }) {
  return (
    <Container>
      {habits?.length ? (
        habits.map(h => <Habit key={h.id} {...h} getHabits={getHabits} />)
      ) : (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </p>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 10px;
  p {
    color: #666;
    font-size: 18px;
    line-height: 22px;
  }
`;
