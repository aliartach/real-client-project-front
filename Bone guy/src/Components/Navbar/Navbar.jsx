import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
    <>
     
      <div className="top-section-navbar">
        <img src={Logo} alt="logo-image" className="Logo-image" />
      </div>
      
      <section className="navbar-content">
        <Link to="#">
          <p>products</p>
        </Link>
        <Link to="#">
          <p>our story</p>
        </Link>
        <Link to="#">
          <p>contact us</p>
        </Link>
      </section>
    </>
  );
}

export default Navbar;
