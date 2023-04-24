import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TasksContext } from "./contexts/TasksContext";
import { UserContext } from "./contexts/UserContext";
import HabitsPage from "./pages/HabitsPage";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";
import TodayPage from "./pages/TodayPage";

export default function App() {
  const [user, setUser] = useState(() => {
    const storeValue = window.localStorage.getItem("trackit");
    return storeValue && JSON.parse(storeValue);
  });

  // TODO: implement the percentage of the circular-progress-bar
  const [tasksStatus, setTasksStatus] = useState({ total: 10, completed: 5 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <TasksContext.Provider value={{ tasksStatus, setTasksStatus }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            <Route path="/habits" element={<HabitsPage />} />
            <Route path="/today" element={<TodayPage />} />
            <Route path="/history" element={<HistoryPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </TasksContext.Provider>
    </UserContext.Provider>
  );
}
