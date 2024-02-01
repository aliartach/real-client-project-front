// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import FAQ from './Pages/FAQs/FAQs'
import Policy from './Pages/policy/policy'
import ContactUs from './Pages/ContactUs/ContactUs.jsx'
// import Featured from './Components/Featured-section/featured-products/featured-products'
import AdminDashboard from "./Pages/Admin/AdminDashboard/AdminDashboard.jsx";
import AdminContent from "./Pages/Admin/Content-Admin/content.jsx";
import AdminSubCategories from "./Pages/Admin/subCategories-Admin/subCategories.jsx";
import AdminProducts from "./Pages/Admin/Admin-products/admin-products.jsx";
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Product from './Pages/Product/Product';
import Admintags from "./Pages/Admin/Tags-Admin/Tag";
import ShoppingCart from "./Components/AddToCart";
import AdminProductsInventory from './Pages/Admin/Admin-inventory/admin-inventory.jsx';
import AdminOrders from './Pages/Admin/Admin-orders/admin-orders.jsx';
import 'mdb-ui-kit/css/mdb.min.css';

function App() {
  return (
    <Router>
      {/* <NavBarPolicies /> */}
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
          <Route path='/admin/products' element={<AdminProducts/>}/>
          <Route path='/admin/content/' element={<AdminContent />} />
          <Route path='/admin/subCategories/' element={<AdminSubCategories />} />
          <Route path="/admin/tags/" element={<Admintags />} />
          <Route path="/admin/inventory/" element={<AdminProductsInventory/>} />
          <Route path="/admin/orders/" element={<AdminOrders/>} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
