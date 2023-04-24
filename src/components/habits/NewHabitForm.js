import { useContext, useState } from "react";

import styled from "styled-components";

import { UserContext } from "../../contexts/UserContext";
import { TasksContext } from "../../contexts/TasksContext";

import DotsLoader from "../DotsLoader";
import WeekdaysButtons from "./WeekdaysButtons";

import { createHabit, getTodayHabits } from "../../services/api";

import { Input } from "../../styles/Input";

export default function NewHabitForm({
  newHabit,
  setNewHabit,
  selectedIds,
  setSelectedIds,
  getHabits,
  setIsOpen
}) {
  const [isLoading, setIsLoading] = useState(false);

  const { setPercentage } = useContext(TasksContext);
  const {
    user: { token }
  } = useContext(UserContext);

  function toggleSelection(id) {
    if (!isLoading) {
      if (selectedIds.includes(id)) setSelectedIds(selectedIds.filter(i => i !== id));
      else setSelectedIds([...selectedIds, id]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedIds.length === 0) alert("Selecione pelo menos um dia!");
    else {
      setIsLoading(true);
      createHabit({ name: newHabit, days: selectedIds }, token)
        .then(res => {
          setIsLoading(false);
          setNewHabit("");
          setSelectedIds([]);
          setIsOpen(false);
          getHabits();
          getTodayHabits(token)
            .then(res => {
              setPercentage(
                res.data.length &&
                  Math.round((res.data.filter(habit => habit.done).length * 100) / res.data.length)
              );
            })
            .catch(err => alert(err.response.data.message));
        })
        .catch(err => {
          const { message, details } = err.response.data;

          let text = message;
          if (details) {
            text += details.reduce((acc, d) => `${acc}\n❌ ${d}`, "\n");
          }
          window.alert(text);
          setIsLoading(false);
        });
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={newHabit}
        onChange={e => setNewHabit(e.target.value)}
        placeholder="nome do hábito"
        required
      />
      <WeekdaysButtons
        isLoading={isLoading}
        selectedIds={selectedIds}
        toggleSelection={toggleSelection}
      />
      <Buttons>
        <ClearButton disabled={isLoading} type="reset" onClick={() => setIsOpen(false)}>
          Cancelar
        </ClearButton>

        <BlueButton type="submit" disabled={isLoading}>
          {isLoading ? <DotsLoader width="43" height="11" /> : "Salvar"}
        </BlueButton>
      </Buttons>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  padding: 6%;
  margin-bottom: 29px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 23px;
  margin-top: 32px;
`;

const ClearButton = styled.button`
  font-size: 16px;
  line-height: 20px;
  color: #52b6ff;
  &:disabled {
    opacity: 0.7;
  }
`;

const BlueButton = styled.button`
  width: 84px;
  height: 35px;

  color: #fff;
  font-size: 16px;
  line-height: 20px;

  background: #52b6ff;
  border-radius: 5px;
`;
