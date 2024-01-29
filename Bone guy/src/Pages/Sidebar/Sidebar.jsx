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
        <li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaCube /> Products</li>
        <li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaFileAlt /> <Link to={`admin/content/`}>Content</Link></li>
        <li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaTags/>  <Link to={`admin/tags/`}>Tags</Link></li>
        <li className={`sidebar-item ${isSidebarOpen ? 'icon-only' : ''}`}><FaCubes /> <Link to={`admin/subcategories/`}>SubCategories</Link></li>
      </ul>
      
      <button className="burger-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
    </div>
 );
}

export default Sidebar;

