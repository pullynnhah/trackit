import { useContext, useEffect, useState } from "react";

import Page from "../components/page/Page";

import { UserContext } from "../contexts/UserContext";
import { PageTitle } from "../styles/PageTitle";
import styled from "styled-components";
import HabitsCalendar from "../components/history/HabitsCalendar";
import { getHistory } from "../services/api";
import HabitsHistory from "../components/history/HabitsHistory";

export default function HistoryPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState(null);
  const [redDates, setRedDates] = useState([]);
  const [greenDates, setGreenDates] = useState([]);
  const [displayDate, setDisplayDate] = useState(null);
  const {
    user: { token }
  } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    getHistory(token)
      .then(res => {
        const newHistory = res.data.reduce(
          (acc, data) => ({
            ...acc,
            [data.day]: data.habits.map(h => ({ name: h.name, done: h.done }))
          }),
          {}
        );

        const red = [];
        const green = [];

        for (const date in newHistory) {
          if (newHistory[date].some(h => !h.done)) red.push(date);
          else green.push(date);
        }

        setHistory(newHistory);
        setRedDates(red);
        setGreenDates(green);
        setIsLoading(false);
      })
      .catch(err => {
        alert(err);
        setIsLoading(false);
      });
  }, [token]);

  return (
    <Page isLoading={isLoading}>
      <Header>
        <PageTitle>Histórico</PageTitle>
      </Header>
      <HabitsCalendar redDates={redDates} greenDates={greenDates} setDisplayDate={setDisplayDate} />
      <HabitsHistory
        habits={history?.[displayDate] ?? []}
        isAllDone={greenDates.includes(displayDate)}
      />
    </Page>
  );
}
const Header = styled.header`
  margin: 28px 0 11px;
`;
