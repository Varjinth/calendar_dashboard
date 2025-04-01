import React from "react";
import { TbUserPlus } from "react-icons/tb";
import './DashboardHeader.css';

const participants = [
  { name: "AL", image: "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg" },
  { name: "GL", image: "" },
  { name: "DT", image: "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg" },
  { name: "RT", image: "" },
  { name: "AA", image: "" },
];

const colorPalette = [
  { background: "#F1E9FE", text: "#804897" },
  { background: "#DCEEFC", text: "#37597A" },
  { background: "#F0FAF5", text: "#236C48" },
  { background: "#F1E9FE", text: "#804897" },
];

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <div className="header-left">
        <h1>Calendar</h1>
        <p>Stay Organized and On Track with Your Personalized Calendar</p>
      </div>
      <div className="header-right">
        <div className="participants">
          {participants.slice(0, 4).map((participant, index) => (
            <div
              key={index}
              className="participant"
              style={{
                backgroundColor: colorPalette[index % colorPalette.length].background,
                color: colorPalette[index % colorPalette.length].text,
                backgroundImage: participant.image ? `url(${participant.image})` : "none",
                backgroundSize: "cover",
              }}
            >
              {!participant.image && participant.name}
            </div>
          ))}

          {participants.length > 4 && (
            <div
              className="participant more-count"
              style={{
                backgroundColor: colorPalette[3].background,
                color: colorPalette[3].text,
              }}
            >
              +{participants.length - 2}
            </div>
          )}
        </div>

        <button className="invite-btn">
          <TbUserPlus /> Invite
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
