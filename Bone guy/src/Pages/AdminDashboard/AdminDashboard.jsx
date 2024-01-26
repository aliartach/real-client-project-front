import React from 'react';
// import AdminContent from '../Content-Admin/content';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import "./AdminDashboard.css";
function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-outlet">
        <Outlet />
     </div>
      
      </div>
    
  );
}

export default AdminDashboard;
