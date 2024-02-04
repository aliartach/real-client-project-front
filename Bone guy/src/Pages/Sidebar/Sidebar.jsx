import React, { useState } from 'react';
import { FaBars, FaCube, FaFileAlt, FaTags, FaCubes } from 'react-icons/fa';
import "./Sidebar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Sidebar() {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
 };

 return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="sidebar-list">
        <li className={`sidebar-item-dashboard ${isSidebarOpen ? 'icon-only' : ''}`}>Dashboard</li>
        <Link to={`products/`}><li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaCube /> Products</li></Link>
        <Link to={`content/`}><li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaFileAlt /> Content</li></Link>
        <Link to={`tags/`}><li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaTags/> Tags</li></Link>
        <Link to={`subcategories/`}><li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaCubes /> SubCategories</li></Link>
        <Link to={`inventory/`}><li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaCubes /> Inventory</li></Link>
        <Link to={`orders/`}><li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaCubes /> Orders</li></Link>
      </ul>
      
      <button className="burger-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
    </div>
 );
}

export default Sidebar;

