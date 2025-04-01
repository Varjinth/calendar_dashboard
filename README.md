# 📅 Calendar Dashboard

A **React-based Calendar Dashboard** that allows users to manage their weekly schedules. This application provides a **Week View**, task management, and navigation controls for an efficient scheduling experience.

---

## 🚀 Features  
✅ **Week View Calendar** – Displays tasks and events for the selected week.  
✅ **Task Management** – Users can add tasks with **start time, end time, date, and task name**.  
✅ **Navigation Controls** – Move **forward or backward** through weeks.  
✅ **Styled UI** – Clean and structured **CSS-based** styling.  
✅ **State Management** – Uses **React hooks** for managing state efficiently.  

---

## 🛠 Tech Stack  
- ⚛ **React.js** (Frontend Framework)  
- ⚡ **Vite** (Fast Build Tool)  
- 🎨 **CSS** (Styling)  
- 🔄 **React Hooks** (State Management)  

---

## ⚡ Installation & Setup  

### 🔹 1. Clone the Repository  

```bash
git clone https://github.com/Varjinth/calendar-dashboard.git
cd calendar-dashboard
```

**🔹 2. Install Vite & Dependencies**

Ensure Node.js (v16+) is installed. Then, install dependencies:

```bash
npm install
```

**🔹 3. Start the Development Server**
```bash
npm run dev
```

It will start a development server on http://localhost:5173/.

**🎯 How the Application Works**

**1️⃣ Navigating the Calendar**

- The calendar displays tasks week-wise.

- Use left (←) and right (→) navigation buttons to switch between weeks.

**2️⃣ Adding a Task**

- Click on the New Task button to open the Task Modal.

- Enter the Start Time, End Time, Date, and Task Name.

- Click Submit to add the task to the calendar.

**3️⃣ Validation Rules**

- All fields are required (Start Time, End Time, Date, Task Name).

- End Time must be greater than Start Time.

