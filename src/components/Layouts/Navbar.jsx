import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaEllipsisH, FaRegStar } from "react-icons/fa";
import "./Navbar.css";
import { LuShare2 } from "react-icons/lu";
import { FaBars } from "react-icons/fa";



const Navbar = ({ visible, setIsVisible }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-left">
        {!visible && <FaBars onClick={() => setIsVisible(!visible)} />}
        <button className="nav-btn"><FaChevronLeft /></button>
        <button className="nav-btn"><FaChevronRight /></button>
        <span className="breadcrumb">Dashboard / <b>Calendar</b></span>
      </div>

      <div className="navbar-right">
        {!visible && <FaEllipsisH className="icon" onClick={() => setMenuOpen(!menuOpen)} />}
        {menuOpen && (
          <div className="menu-dropdown">
            <div className="menu-item">+ New Tab</div>
            <div className="menu-item"><FaRegStar /> Favorite</div>
            <div className="menu-item"><LuShare2 /> Share</div>
          </div>
        )}

        <button className="new-tab-btn">+ New Tab</button>
        <div className="icon-group">
          <FaRegStar className="icon" />
          <LuShare2 className="icon" />
          <FaEllipsisH className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
