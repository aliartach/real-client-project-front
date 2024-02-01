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
        <li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaCube /> <Link to={`products/`}>Products</Link></li>
        <li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaFileAlt /> <Link to={`content/`}>Content</Link></li>
        <li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaTags/> <Link to={`tags/`}>Tags</Link></li>
        <li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaCubes /> <Link to={`subcategories/`}>SubCategories</Link></li>
        <li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaCubes /> <Link to={`inventory/`}>Inventory</Link></li>
        <li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaCubes /> <Link to={`orders/`}>Orders</Link></li>
      </ul>
      
      <button className="burger-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
    </div>
 );
}

export default Sidebar;

