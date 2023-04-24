import dayjs from "dayjs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

import "../../styles/css/calendar.css";

export default function HabitsCalendar({ redDates, greenDates, setDisplayDate }) {
  const navigate = useNavigate();

  function changeDate(e) {
    const calendarDay = dayjs(e).format("DD/MM/YYYY");
    if (dayjs().format("DD/MM/YYYY") === calendarDay) navigate("/today");
    else {
      setDisplayDate(calendarDay);
    }
  }

  function getClassName({ date }) {
    const calendarDay = dayjs(date).format("DD/MM/YYYY");
    if (dayjs().format("DD/MM/YYYY") === calendarDay) return "";
    if (redDates.includes(calendarDay)) return "red-circle";
    return greenDates.includes(calendarDay) ? "green-circle" : "";
  }

  return (
    <Calendar
      locale="pt-BR"
      onClickDay={changeDate}
      tileClassName={getClassName}
      tileContent={<div></div>}
      formatDay={(locale, date) => dayjs(date).format("DD")}
    />
  );
}
