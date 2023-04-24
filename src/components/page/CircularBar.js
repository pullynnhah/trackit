import "react-circular-progressbar/dist/styles.css";

import { useContext, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";

import { TasksContext } from "../../contexts/TasksContext";
import { getTodayHabits } from "../../services/api";
import { UserContext } from "../../contexts/UserContext";

export default function CircularBar() {
  const { percentage, setPercentage } = useContext(TasksContext);
  const {
    user: { token }
  } = useContext(UserContext);

  useEffect(() => {
    if (percentage === null) {
      getTodayHabits(token)
        .then(res => {
          setPercentage(
            res.data.length &&
              Math.round((res.data.filter(habit => habit.done).length * 100) / res.data.length)
          );
        })
        .catch(err => alert(err.response.data.message));
    }
  }, [token, percentage, setPercentage]);
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
