import React from "react";
import Logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"
function Navbar() {

  const { pathname } = useLocation();

  return (
    <>
     
      <div className="top-section-navbar">
        <img src={Logo} alt="logo-image" className="Logo-image" />
      </div>
      
      <section className={pathname === '/login' || pathname === '/signup' ? "login-navbar" : "navbar-content"}>
        <Link to="#">
          <p>products</p>
        </Link>
        <Link to="#">
          <p>our story</p>
        </Link>
        <Link to="/ContactUs">
          <p>contact us</p>
        </Link>
      </section>
    </>
  );
}

export default Navbar;