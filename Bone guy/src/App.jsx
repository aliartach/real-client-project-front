// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import Policy from './Pages/policy/policy'
// import NavBarPolicies from './Components/navbarpolicies/navbarpolicies'
import PrivacyPolicie from './Components/privacypolicy/privacypolicy'
import Terms from './Components/termsandconditions/termsandconditions'
import Return from './Components/returnpolicy/returnpolicy'

function App() {

  return (
    <Router>
    <div>
      {/* <NavBarPolicies /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicie />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/return-policy" element={<Return />} />
        <Route path="/Policy" element={<Policy />} />
      </Routes>
    </div>
  </Router>
  )
}

// const PrivacyPolicy = () => {
//   return <div>This is the Privacy Policy component</div>;
// };

// const TermsAndConditions = () => {
//   return <div>This is the Terms and Conditions component</div>;
// };

// const ReturnPolicy = () => {
//   return <div>This is the Return Policy component</div>;
// };

export default App
