import "react-circular-progressbar/dist/styles.css";

import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";

import { TasksContext } from "../../contexts/TasksContext";
import { calcPercentage } from "../../utils/calcPercentage";

export default function CircularBar() {
  const { tasksStatus } = useContext(TasksContext);
  const percentage = calcPercentage({ ...tasksStatus });
  return (
    <Container>
      <CircularProgressbar
        value={percentage}
        text="Hoje"
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          fontSize: "18px",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
          strokeLinecap: "round"
        })}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 91px;
  height: 91px;
  margin-bottom: 31px;
`;
