import React from "react";
import Logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css"


function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate('/');
  }

  return (
    <>
      <div className="top-section-navbar">
        <Link to="/">
          <img src={Logo} alt="logo-image" className="Logo-image" />
        </Link>
      </div>
        <section className={pathname === '/login' || pathname === '/signup' ? "login-navbar" : "navbar-content"}>
          <Link to="#">
            <p>products</p>
          </Link>
          <Link to="/aboutus">
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