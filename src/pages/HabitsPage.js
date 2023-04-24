import { useCallback, useContext, useEffect, useState } from "react";

import styled from "styled-components";

import Page from "../components/page/Page";
import Habits from "../components/habits/Habits";
import NewHabitForm from "../components/habits/NewHabitForm";

import { UserContext } from "../contexts/UserContext";

import { listHabits } from "../services/api";

import { PageTitle } from "../styles/PageTitle";

export default function HabitsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [habits, setHabits] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [newHabit, setNewHabit] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);

  const {
    user: { token }
  } = useContext(UserContext);

  const getHabits = useCallback(() => {
    setIsLoading(true);
    listHabits(token)
      .then(res => {
        setHabits(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        alert(err.response.data.message);
        setIsLoading(false);
      });
  }, [token]);

  useEffect(getHabits, [getHabits]);

  return (
    <Page isLoading={isLoading}>
      <Header>
        <PageTitle>Meus Hábitos</PageTitle>
        <button onClick={() => setIsOpen(!isOpen)}>+</button>
      </Header>
      {isOpen && (
        <NewHabitForm
          newHabit={newHabit}
          setNewHabit={setNewHabit}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          getHabits={getHabits}
          setIsOpen={setIsOpen}
        />
      )}
      <Habits habits={habits} getHabits={getHabits} />
    </Page>
  );
}

const Header = styled.header`
  margin: 21px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 40px;
    height: 35px;

    background: #52b6ff;
    border-radius: 5px;

    color: #fff;
    font-size: 27px;
    line-height: 34px;
  }
`;
