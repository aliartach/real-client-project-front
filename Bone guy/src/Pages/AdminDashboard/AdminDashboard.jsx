import React from 'react';
import { FaCube, FaFileAlt, FaTags, FaCubes } from 'react-icons/fa';
import "./AdminDashboard.css";
import logo from "../../assets/logo.svg";

function AdminDashboard() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="sidebar-list">
      <li className="sidebar-item-dashboard">Dashboard</li>
        <li className="sidebar-item"><FaCube /> Products</li>
        <li className="sidebar-item"><FaFileAlt /> Content</li>
        <li className="sidebar-item"><FaTags/> Tags</li>
        <li className="sidebar-item"><FaCubes /> SubCategories</li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
