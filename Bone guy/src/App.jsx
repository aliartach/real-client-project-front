import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurStory from './Components/ourStory'; // Adjust the path accordingly

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/story" element={<OurStory storyText="Your story text goes here" />} />
          {/* Adjust the storyText prop with the actual story text you want to pass */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
