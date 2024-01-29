import "../Footer/Footer.css";
import footerLogo from "/logo.png";
import facebooklogo from "/facebooklogo.png";
import instagramlogo from "/instagramlogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerdiv">
        <div>
          <a href="/">
            <img className="footerLogo" alt="footerlogo" src={footerLogo} />{" "}
          </a>
        </div>
        <div>
            <ul className="ulfooter">
                <Link to=""><li className="lifooter">OUR STORY</li></Link> 
                <Link to=""><li className="lifooter">FAQs</li></Link>
                <Link to=""><li className="lifooter">CONTACT US</li></Link> 
            </ul>
        </div>
        <div>
         
            <ul className="ulfooter">
                <Link to='/Policy' state= "privacy-policy"><li className="lifooter">PRIVACY POLICY</li></Link>
                <Link to="/Policy" state="terms-and-conditions" ><li className="lifooter">TERMS & CONDITIONS</li></Link> 
                <Link to="/Policy" state="return-policy"><li className="lifooter">RETURN POLICY</li></Link>
            </ul>
        </div>
        <div>
          <ul className="ulfooter">
            <li className="lifooter">FOLLOW US</li>
            <div>
              <a
                href="https://www.facebook.com/theboneguy.lb?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="facebooklogo"
                  alt="facebook logo"
                  src={facebooklogo}
                />
              </a>
              <a
                href="https://www.instagram.com/theboneguy.lb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="instagramlogo"
                  alt="instagram logo"
                  src={instagramlogo}
                />
              </a>
            </div>
          </ul>
        </div>
        <div>
          <ul className="ulfooter">
            <li className="lifooter">MAILING LIST</li>
            <input
              className="mailinglist1"
              placeholder="EMAIL"
              type="email"
            ></input>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
