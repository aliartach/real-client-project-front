import Logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css"
import PropTypes from 'prop-types';
function Navbar({textColor}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="top-section-navbar">
        <Link to="/">
          <img src={Logo} alt="logo-image" className="Logo-image" />
        </Link>
      </div>
      
      <section className="navbar-content" style={{color: textColor}}>
        <Link to="/product">
          <p>products</p>
        </Link>
        <Link to="/aboutus">
          <p>our story</p>
        </Link>
        <Link to="/ContactUs">
          <p>contact us</p>
        </Link>
      </section>
    </>
  );
}
Navbar.propTypes = {
  textColor: PropTypes.string.isRequired,
};

export default Navbar;