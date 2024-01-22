import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurStory from './Components/ourStory'; // Adjust the path accordingly
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/story" element={<OurStory/>} />
          <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
