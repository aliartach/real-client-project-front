import './App.css'
import Home from './Pages/Home'
import FAQs from './Pages/FAQs/FAQs'
import AboutUs from './Pages/AboutUs/AboutUs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound'
import SignUp from './Components/SignUp/SignUp'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;