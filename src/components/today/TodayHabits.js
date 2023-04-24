import styled from "styled-components";

import HabitCard from "./HabitCard";

export default function TodayHabits({ habits, getHabits }) {
  return (
    <Container>
      {habits?.map(h => (
        <HabitCard key={h.id} {...h} getHabits={getHabits} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 10px;
`;
