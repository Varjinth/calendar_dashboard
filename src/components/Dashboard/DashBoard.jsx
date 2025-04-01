import React, { useState } from "react";
import Calendar from "./Calendar";
import { FaRegCalendarAlt, FaStar, FaClipboardList, FaUsers } from "react-icons/fa";

const DashBoard = () => {
  const [activeTab, setActiveTab] = useState("all-scheduled");

  return (
    <>
      <div className="tab-container">
        {/* Tab Navigation */}
        <div className="tab-nav">
          <button
            className={activeTab === "all-scheduled" ? "active" : ""}
            onClick={() => setActiveTab("all-scheduled")}
          >
            <FaRegCalendarAlt /> All Scheduled
          </button>
          <button
            className={activeTab === "events" ? "active" : ""}
            onClick={() => setActiveTab("events")}
          >
            <FaStar /> Events
          </button>
          <button
            className={activeTab === "meetings" ? "active" : ""}
            onClick={() => setActiveTab("meetings")}
          >
            <FaClipboardList /> Meetings
          </button>
          <button
            className={activeTab === "reminders" ? "active" : ""}
            onClick={() => setActiveTab("reminders")}
          >
            <FaUsers /> Task Reminders
          </button>
        </div>

        {/* Render Components Based on Active Tab */}
        <div className="tab-content">
          {activeTab === "all-scheduled" && <Calendar />}
          {activeTab === "events" && <p>Events Content...</p>}
          {activeTab === "meetings" && <p>Meetings Content...</p>}
          {activeTab === "reminders" && <p>Task Reminders Content...</p>}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
