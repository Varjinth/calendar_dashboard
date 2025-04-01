import React, { useState } from "react";
import "./TaskModal.css";

const TaskModal = ({ isOpen, onClose, addTask }) => {
  const [task, setTask] = useState({
    startTime: "",
    endTime: "",
    date: "",
    taskName: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const start = task.startTime;
    const end = task.endTime;

    if (!start || !end || !task.date || !task.taskName.trim()) {
      setError("All fields are required.");
      return;
    }

    if (start && end && start >= end) {
      setError("End time must be greater than start time.");
      return;
    }

    setError("");
    addTask(task);
    setTask({
      startTime: "",
      endTime: "",
      date: "",
      taskName: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Task</h2>
        <input
          type="date"
          name="date"
          value={task.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="startTime"
          value={task.startTime}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="endTime"
          value={task.endTime}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="taskName"
          placeholder="Task Name"
          value={task.taskName}
          onChange={handleChange}
          required
        />
        {error && <p className="error">{error}</p>}
        <div className="modal-buttons">
          <button onClick={handleSubmit} className="save-btn">Save</button>
          <button onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
