import React from "react";
import { format, startOfWeek, endOfWeek } from "date-fns";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./CalendarHeader.css";

const CalendarHeader = ({ onView, onViewChange, currentDate, setCurrentDate }) => {
  const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endOfWeekDate = endOfWeek(currentDate, { weekStartsOn: 1 });
  const formattedMonth = format(currentDate, "MMMM yyyy");
  const formattedStart = format(startOfWeekDate, "dd MMM");
  const formattedEnd = format(endOfWeekDate, "dd MMM yyyy");
  const goToToday = () => setCurrentDate(new Date());

  return (
    <div className="calendar-header">
      <div className="left-section">
        <h2>{formattedMonth}</h2>
        <button onClick={goToToday} className="today-button">Today</button>
      </div>

      <div className="right-section">
        <div className="view-options">
          <button onClick={() => onViewChange("day")}  className={onView === "day" ? "active" : ""}>Day</button>
          <button onClick={() => onViewChange("week")} className={onView === "week" ? "active" : ""}>Week</button>
          <button onClick={() => onViewChange("month")} className={onView === "month" ? "active" : ""}>Month</button>
        </div>

        <div className="date-range">
          <FaRegCalendarAlt className="calendar-icon" />
          <span>{formattedStart} - {formattedEnd}</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
