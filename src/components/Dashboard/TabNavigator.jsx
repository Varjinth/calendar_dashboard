import React, { useState } from "react";
import { FaEllipsisH, FaPlus, FaSearch } from "react-icons/fa";
import './TabNavigator.css';
import Calendar from "../Calendar/Calendar";
import { TbCalendarDue } from "react-icons/tb";
import { BsStar } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";
import { PiNotepadBold } from "react-icons/pi";
import { TbFilter } from "react-icons/tb";
import TaskModal from "../Modals/TaskModal";

const tabs = [
  { name: "All Scheduled", icon: <TbCalendarDue /> },
  { name: "Events", icon: <BsStar /> },
  { name: "Meetings", icon: <TbMessages /> },
  { name: "Task Reminders", icon: <PiNotepadBold /> },
];

const TabNavigator = () => {
  const [activeTab, setActiveTab] = useState("All Scheduled");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dummyTasks, setDummyTasks] = useState([
    { startTime: "09:00", endTime: "10:30", date: "2025-03-31", taskName: "Team Meeting" },
    { startTime: "11:00", endTime: "12:00", date: "2025-04-01", taskName: "Code Review" },
    { startTime: "14:00", endTime: "15:30", date: "2025-04-03", taskName: "Client Call" }
  ]);

  const addTask = (task) => {
    setDummyTasks([...dummyTasks, task]);
  };

  return (
    <>
      <div className="tab-navigator">
        {/* Leftside: Tabs */}
        <div className="tab-list">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`tab-item ${activeTab === tab.name ? "active" : ""}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.icon} <span>{tab.name}</span>
            </div>
          ))}
        </div>

        {/* Rightside: Controls */}
        <div className="tab-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search.." />
          </div>
          <button className="filter-btn">
            <TbFilter /> Filter
          </button>
          <button className="more-btn">
            <FaEllipsisH />
          </button>
          <button className="new-btn" onClick={() => setIsModalOpen(true)}>
            <FaPlus /> New
          </button>
        </div>
      </div>
      <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} addTask={addTask} />

      {activeTab === "All Scheduled" && <Calendar dummyTasks={dummyTasks} />}
      {activeTab === "events" && <p>Events Content...</p>}
      {activeTab === "meetings" && <p>Meetings Content...</p>}
      {activeTab === "reminders" && <p>Task Reminders Content...</p>}
    </>




  );
};


// const TabNavigator = () => {
//   const [activeTab, setActiveTab] = useState("All Scheduled");
//   const [searchActive, setSearchActive] = useState(false);

//   return (
//     <div className="tab-navigator">
//       {/* Tabs Section */}
//       <div className="tab-list">
//         {tabs.map((tab) => (
//           <div
//             key={tab.name}
//             className={`tab-item ${activeTab === tab.name ? "active" : ""}`}
//             onClick={() => setActiveTab(tab.name)}
//           >
//             {tab.icon} <span className="tab-text">{tab.name}</span>
//           </div>
//         ))}
//       </div>

//       {/* Controls Section */}
//       <div className="tab-controls">
//         <div className={`search-box ${searchActive ? "active" : ""}`}>
//           <FaSearch className="search-icon" onClick={() => setSearchActive(!searchActive)} />
//           <input type="text" placeholder="Search..." />
//         </div>

//         <button className="filter-btn">
//           <TbFilter />
//         </button>
//         <button className="more-btn">
//           <FaEllipsisH />
//         </button>
//         <button className="new-btn">
//           <FaPlus /> 
//         </button>
//       </div>
//     </div>
//   );
// };


export default TabNavigator;
