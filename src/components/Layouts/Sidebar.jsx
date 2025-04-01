import React, { useState } from "react";
import {
    FaChevronDown, FaBars
} from "react-icons/fa";
import "./Sidebar.css";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { HiChevronUpDown } from "react-icons/hi2";
import { PiNotificationBold } from "react-icons/pi";
import { TbCalendar } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { TbSettings2 } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

const Sidebar = ({ setIsVisible }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [mainMenuOpen, setMainMenuOpen] = useState(true);
    const [pagesOpen, setPagesOpen] = useState(true);

    return (
        <>
            <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
                <div className="slider">
                    {collapsed ? <FaBars onClick={() => setCollapsed(!collapsed)} className="bar-icon" /> : <div className="dot-container">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>}
                    {!collapsed && (
                        <RiArrowLeftDoubleFill
                            className="collapse-btn"
                            onClick={() => {
                                setCollapsed(!collapsed);
                                setPagesOpen(true);
                                setMainMenuOpen(true);
                            }
                            }
                        />
                    )}
                    <IoIosClose className="close-btn" onClick={() => setIsVisible(false)} />
                </div>

                {/* Profile Section */}
                {!collapsed && (
                    <div className="profile">
                        <div className="profile-info" >
                            <div className="profile-details">

                                <img src="profile.png" alt="Profile" className="profile-img" />
                                <div>
                                    <h4>Varjinth S</h4>
                                    <p>varjinths@gmail.com</p>
                                </div>
                            </div>
                            <HiChevronUpDown />

                        </div>
                    </div>
                )}
                {/* Main Menu */}
                <div className="menu">
                    <h5 onClick={() => setMainMenuOpen(!mainMenuOpen)}>
                        Main Menu <FaChevronDown className={`arrow ${mainMenuOpen ? "open" : ""}`} />
                    </h5>
                    {mainMenuOpen && (
                        <>
                            <div className="menu-item">
                                <IoSearchOutline className="icon" /> {!collapsed && <span>Search</span>}
                            </div>
                            <div className="menu-item">
                                <PiNotificationBold className="icon" />
                                {!collapsed && <span>Notification</span>}
                                {!collapsed && <span className="badge">99+</span>}
                            </div>
                            <div className="menu-item active">
                                <TbCalendar className="icon" /> {!collapsed && <span>Calendar</span>}
                            </div>
                            <div className="menu-item">
                                <TbSettings2 className="icon" /> {!collapsed && <span>Settings</span>}
                            </div>
                        </>
                    )}
                </div>

                {/* My Pages */}
                <div className="menu">
                    <h5 onClick={() => setPagesOpen(!pagesOpen)}>
                        My Pages <FaChevronDown className={`arrow ${pagesOpen ? "open" : ""}`} />
                    </h5>
                    {pagesOpen && (
                        <>
                            <div className="menu-item create">
                                <FiPlus className="icon" /> {!collapsed && <span>Create New</span>}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
