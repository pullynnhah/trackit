import styled from "styled-components";
import Icon from "./Icon";
export default function HabitsHistory({ habits, isAllDone }) {
  return (
    <Container>
      {habits.map((h, index) => (
        <Card key={index}>
          <h3>{h.name}</h3>
          <Icon isAllDone={isAllDone} />
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
`;

const Card = styled.div`
  width: 100%;
  height: 50px;
  background: #fff;
  padding: 5%;
  margin-bottom: 10px;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
