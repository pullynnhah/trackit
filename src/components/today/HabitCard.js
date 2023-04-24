import styled from "styled-components";

import Icon from "./Icon";

import { HabitTitle } from "../../styles/HabitTitle";

export default function HabitCard({ id, name, done, currentSequence, highestSequence, getHabits }) {
  return (
    <Container>
      <div>
        <HabitTitle>{name}</HabitTitle>

        <Wrapper>
          <p>
            Sequência atual:{" "}
            <Streak isGreen={done}>
              {currentSequence} dia{currentSequence !== 1 && "s"}
            </Streak>
          </p>
          <p>
            Seu recorde:{" "}
            <Streak isGreen={done && currentSequence === highestSequence}>
              {highestSequence} dia{currentSequence !== 1 && "s"}
            </Streak>
          </p>
        </Wrapper>
      </div>
      <Icon id={id} done={done} getHabits={getHabits} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 94px;
  padding: 4%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  margin-top: 7px;
  p {
    font-size: 13px;
    line-height: 16px;
    color: #666;
  }
`;
const Streak = styled.span`
  color: ${props => (props.isGreen ? "#8FC549" : "#666")};
`;
