import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserContext } from "./contexts/UserContext";
import { TasksContext } from "./contexts/TasksContext";

import LoginPage from "./pages/LoginPage";
import TodayPage from "./pages/TodayPage";
import HabitsPage from "./pages/HabitsPage";
import SignupPage from "./pages/SignupPage";
import HistoryPage from "./pages/HistoryPage";

export default function App() {
  const [user, setUser] = useState(() => {
    const storeValue = window.localStorage.getItem("trackit");
    return storeValue && JSON.parse(storeValue);
  });

  const [percentage, setPercentage] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <TasksContext.Provider value={{ percentage, setPercentage }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            <Route path="/habits" element={<HabitsPage />} />
            <Route path="/today" element={<TodayPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </BrowserRouter>
      </TasksContext.Provider>
    </UserContext.Provider>
  );
}
