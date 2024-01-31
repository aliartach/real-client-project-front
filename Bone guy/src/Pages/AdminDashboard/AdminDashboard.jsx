import { useEffect, useState } from 'react';
// import React from 'react';
// import { FaCube, FaFileAlt, FaTags, FaCubes } from 'react-icons/fa';
// import AdminContent from '../Content-Admin/content';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import "./AdminDashboard.css";
function AdminDashboard() {

  const [token,setToken]=useState(()=>sessionStorage.getItem('jwt'));
  const navigate = useNavigate();

  useEffect(() => {
    setToken(sessionStorage.getItem('jwt'))
    if (!token) {
      navigate('/login');
    }
  }, [token]);


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
