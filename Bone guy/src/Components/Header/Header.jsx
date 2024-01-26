import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import HeaderImage from "../../assets/header-image.png";

import buttonImage from "../../assets/paw2.png";
import headerTag1 from "../../assets/header1.svg";
import headerTag2 from "../../assets/header2.svg";
import headerTag3 from "../../assets/header3.svg";

import { Link } from "react-router-dom";
function header() {
  return (
    <>
      <section className="Header-Home">
        <Navbar />

        <section className="sub-text-header">
          <p>Healthy treats for healthy pets</p>
          <p className="sub-sub-text-header">
            Treat your furry friend to the goodness of nature with our all-natural<br />
            & nutritious pet treats!
          </p>
          <button className="button-header">
            <Link to="#">
              SHOP NOW <img src={buttonImage} alt="" />
            </Link>
          </button>
        </section>
      </section>

      <section className="buttom-section-header">
        <img src={headerTag1} alt="" className="tag1-header" />
        <img src={headerTag2} alt="" className="tag1-header" />
        <img src={headerTag3} alt="" className="tag1-header" />
      </section>
    </>

  );
}

export default header;
