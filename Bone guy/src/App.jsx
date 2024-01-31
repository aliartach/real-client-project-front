import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import FAQ from './Pages/FAQs/FAQs'
import Policy from './Pages/policy/policy'
import ContactUs from './Pages/Contactus/ContactUs'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Featured from './Components/Featured-section/featured-products/featured-products'
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import AdminContent from "./Pages/Content-Admin/content";
import AdminSubCategories from "./subCategories-Admin/subCategories";
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Product from './Pages/Product/Product';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<FAQ />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="/FAQs" element={<FAQ />} />
        <Route path='/admin' element={<AdminDashboard />}>
          {/* <Route path='/products' element={<AdminProducts/>}/> */}
          <Route path='admin/content/' element={<AdminContent />} />
          <Route path='admin/subCategories/' element={<AdminSubCategories />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

      </Routes>
    </Router>
  );
}

export default App;