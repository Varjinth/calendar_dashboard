import React, { useState, useEffect } from "react";
import { format, addDays, startOfWeek, getHours, getMinutes } from "date-fns";
import "./CalendarGrid.css";
import { isSameDay } from "date-fns";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";


const CalendarGrid = ({ currentDate, onPrevWeek, onNextWeek, dummyTasks }) => {
  const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, "0")}:00`);
  const [currentTimePosition, setCurrentTimePosition] = useState(null);
  const [formattedTime, setFormattedTime] = useState("");
  const [gridCellWidth, setGridCellWidth] = useState(0);
  const [timeSlotWidth, setTimeSlotWidth] = useState(0);

  useEffect(() => {
    const gridCell = document.querySelector(".grid-cell");
    const timeslot = document.querySelector(".time-slot");

    if (!gridCell || !timeslot) return;

    const updateGridWidth = () => {
      setGridCellWidth(gridCell.offsetWidth);
      setTimeSlotWidth(timeslot.offsetWidth);
    };

    const observer = new ResizeObserver(() => updateGridWidth());
    observer.observe(gridCell);
    observer.observe(timeslot);

    updateGridWidth();

    return () => observer.disconnect();
  }, []);


  const todayIndex = [...Array(7)].findIndex((_, i) =>
    isSameDay(addDays(startOfWeekDate, i), new Date())
  );

  const leftPosition = timeSlotWidth + todayIndex * gridCellWidth;
  const calculatePosition = (startTime, endTime) => {
    const CELL_HEIGHT = 100;
    const BORDER_OFFSET = 1;
    const [startHour, startMin] = startTime.split(":").map(Number);
    const [endHour, endMin] = endTime.split(":").map(Number);
    const top = startHour * CELL_HEIGHT + (startMin / 60) * CELL_HEIGHT + BORDER_OFFSET;
    const height = ((endHour - startHour) * CELL_HEIGHT) + ((endMin - startMin) / 60) * CELL_HEIGHT - 12;
    return { top, height };
  };



  const updateCurrentTimePosition = () => {
    const now = new Date();
    const currentHour = getHours(now);
    const currentMinute = getMinutes(now);
    const GRID_HEADER_HEIGHT = 50;
    const CELL_HEIGHT = 100;

    const position =
      GRID_HEADER_HEIGHT +
      (currentHour * CELL_HEIGHT) +
      (currentMinute / 60) * CELL_HEIGHT

    setCurrentTimePosition(position);
    setFormattedTime(format(now, "hh:mm a"));
  };

  useEffect(() => {
    updateCurrentTimePosition();
    const interval = setInterval(updateCurrentTimePosition, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="calendar-container">
      {/* Calendar Grid Header */}
      <div className="grid-header">
        <div className="header-cell nav-buttons">
          <button onClick={onPrevWeek} className="nav-button"><GoArrowLeft style={{ fontSize: "20px", fontWeight: "bold" }} /></button>
          <button onClick={onNextWeek} className="nav-button right-btn"><GoArrowRight style={{ fontSize: "20px", fontWeight: "bold" }} /></button>
        </div>

        {[...Array(7)].map((_, i) => {
          const day = addDays(startOfWeekDate, i);
          const isToday = format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");

          return (
            <div
              key={i}
              className={`header-cell ${isToday ? "today-header" : ""}`} 
            >
              {format(day, "EEE").toUpperCase()} {format(day, "dd")}
            </div>
          );
        })}
      </div>

      {/* Calendar Body */}
      <div className="grid-body">
        {/* Time Column */}
        <div className="time-column">
          {hours.map((hour, index) => {
            const formattedHour = new Date(`2000-01-01T${hour}:00`).toLocaleString("en-US", {
              hour: "numeric",
              hour12: true,
            });

            return (
              <div key={index} className="time-slot">
                <span>  {formattedHour === "12 AM" ? "" : formattedHour} </span>
              </div>
            );
          })}
        </div>

        {/* Weekly Calendar Grid */}
        {[...Array(7)].map((_, dayIndex) => {
          const day = addDays(startOfWeekDate, dayIndex);
          const formattedDate = format(day, "yyyy-MM-dd");

          return (
            <div key={dayIndex} className="day-column">
              {hours.map((_, hourIndex) => (
                <div key={hourIndex} className="grid-cell"></div>
              ))}

              {dummyTasks
                .filter(task => task.date === formattedDate)
                .map((task, index) => {
                  const { top, height } = calculatePosition(task.startTime, task.endTime);

                  const colorThemes = [
                    { header: "#DDC8FA", background: "#F1E9FE", text: "#804897" }, // Purple
                    { header: "#BFE1FA", background: "#DCEEFC", text: "#37597A" }, // Light Blue
                    { header: "#CEEEDF", background: "#F0FAF5", text: "#236C48" }, // Green
                  ];

                  const randomTheme = colorThemes[index % colorThemes.length];
                  const formatTime = (time) => {
                    const [hour, minute] = time.split(":").map(Number);
                    return new Date(2000, 0, 1, hour, minute).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: minute > 0 ? "2-digit" : undefined,
                      hour12: true,
                    });
                  };

                  return (
                    <div
                      key={index}
                      className="task-box"
                      style={{
                        top,
                        height,
                        width: gridCellWidth - 10,
                        backgroundColor: randomTheme.background,
                      }}
                    >
                      <div
                        className="task-time"
                        style={{
                          backgroundColor: randomTheme.header,
                          color: randomTheme.text,
                        }}
                      >
                        {formatTime(task.startTime)} - {formatTime(task.endTime)}
                      </div>
                      <div
                        className="task-content"
                        style={{ color: randomTheme.text }}
                      >
                        {task.taskName}
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>


      {/* Time indicator */}
      {currentTimePosition !== null && (
        <div className="current-time-line" style={{ top: `${currentTimePosition}px` }}>
          <span className="time-indicator">{formattedTime}</span>
          {todayIndex !== -1 &&
            (<>
              <div style={{
                background: "#4954E8",
                height: "2px",
                width: `${gridCellWidth - 4}px`,
                left: `${leftPosition}px`,
                position: "absolute",
              }}
              ></div>
              {/* Left Tip (Triangle) */}
              <div
                style={{
                  position: "absolute",
                  left: `${leftPosition - 4}px`,
                  content: '',
                  borderRadius: "40% 30%",
                  width: "12px",
                  height: "6px",
                  backgroundColor: "#4954E8",
                  clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
                  transform: `rotate(90deg)`,
                }}
              ></div>

              {/* Right Tip (Triangle) */}
              <div
                style={{
                  position: "absolute",
                  left: `${leftPosition + gridCellWidth - 10}px`,
                  content: '',
                  borderRadius: "40% 30%",
                  width: "12px",
                  height: "6px",
                  backgroundColor: "#4954E8",
                  clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
                  transform: `rotate(270deg)`,
                }}
              ></div>
            </>)}
        </div>
      )}
    </div>
  );
};

export default CalendarGrid;
