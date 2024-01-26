import React from 'react';
// import AdminContent from '../Content-Admin/content';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Sidebar />
   
        <Outlet />
     
      
      </div>
    
  );
}

export default AdminDashboard;
