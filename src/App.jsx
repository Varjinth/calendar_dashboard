import Navbar from "./components/Layouts/Navbar";
import DashboardHeader from "./components/Dashboard/DashboardHeader";
import TabNavigator from "./components/Dashboard/TabNavigator";
import Sidebar from "./components/Layouts/Sidebar";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="app-container">
      {isVisible && <Sidebar setIsVisible={setIsVisible} />}
      <div className="main-content">
        <Navbar visible={isVisible} setIsVisible={setIsVisible} />
        <DashboardHeader />
        <TabNavigator />
      </div>
    </div>
  );
};

export default App;