import { useCallback, useContext, useEffect, useState } from "react";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import styled from "styled-components";
import updateLocale from "dayjs/plugin/updateLocale";

import Page from "../components/page/Page";
import TodayHabits from "../components/today/TodayHabits";

import { WEEKDAYS } from "../constants/weekdays";

import { UserContext } from "../contexts/UserContext";
import { TasksContext } from "../contexts/TasksContext";

import { getTodayHabits } from "../services/api";

import { PageTitle } from "../styles/PageTitle";

export default function TodayPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [habits, setHabits] = useState(null);

  const {
    user: { token }
  } = useContext(UserContext);
  const { percentage, setPercentage } = useContext(TasksContext);

  dayjs.extend(updateLocale);
  dayjs.locale("pt-br");
  dayjs.updateLocale("pt-br", {
    weekdays: WEEKDAYS
  });

  const getHabits = useCallback(() => {
    setIsLoading(true);
    getTodayHabits(token)
      .then(res => {
        setHabits(res.data);
        setPercentage(
          res.data.length &&
            Math.round((res.data.filter(habit => habit.done).length * 100) / res.data.length)
        );
        setIsLoading(false);
      })
      .catch(err => {
        alert(err.response.data.message);
        setIsLoading(false);
      });
  }, [token, setPercentage]);

  useEffect(getHabits, [getHabits]);

  return (
    <Page isLoading={isLoading}>
      <Header started={percentage !== 0}>
        <PageTitle>{dayjs().format("dddd, DD/MM")}</PageTitle>
        <p>
          {percentage ? `${percentage}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
        </p>
      </Header>
      <TodayHabits habits={habits} getHabits={getHabits} />
    </Page>
  );
}

const Header = styled.header`
  margin: 28px 0;

  p {
    font-size: 18px;
    line-height: 22px;

    color: ${props => (props.started ? "#8FC549" : "#BABABA")};
  }
`;
