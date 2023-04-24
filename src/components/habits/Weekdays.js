import styled from "styled-components";

import { WEEKDAYS } from "../../constants/weekdays";

export default function Weekdays({ selectedIds }) {
  return (
    <Container>
      {WEEKDAYS.map((w, index) => (
        <Weekday key={index} isSelected={selectedIds.includes(index)}>
          {w[0]}
        </Weekday>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

const Weekday = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ isSelected }) => (isSelected ? "#fff" : "#dbdbdb")};
  font-size: 20px;
  line-height: 25px;

  background: ${({ isSelected }) => (isSelected ? "#cfcfcf" : "#fff")};
  border: 1px solid ${({ isSelected }) => (isSelected ? "#cfcfcf" : "#d4d4d4")};
  border-radius: 5px;
`;
