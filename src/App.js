import { BrowserRouter, Route, Routes } from "react-router-dom";

import HabitsPage from "./pages/HabitsPage";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TodayPage from "./pages/TodayPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/habits" element={<HabitsPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
