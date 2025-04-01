import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

const Calendar = ({ dummyTasks }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("week");

  // To handle previous week navigation
  const handlePrevWeek = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  // To handle next week navigation
  const handleNextWeek = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  };

  return (
    <div className="calender-container" style={{ width: "auto" }}>
      {/* Calendar Header */}
      <CalendarHeader
        onView={viewMode}
        onViewChange={setViewMode}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />

      {/* Calendar Grid */}
      {viewMode === "week" && (
        <CalendarGrid
          currentDate={currentDate}
          onPrevWeek={handlePrevWeek}
          onNextWeek={handleNextWeek}
          dummyTasks={dummyTasks}
        />
      )}
    </div>
  );
};

export default Calendar;
