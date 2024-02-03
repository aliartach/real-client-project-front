import React from "react";
import Navbar from "../Navbar/Navbar";
import "./HeaderProduct.css";
import Img from "../../assets/header-product.jpg";
function HeaderProduct() {
  return (
    <>
      <section src={Img} className="header-product" >
      <Navbar />
      </section>
    </>
  );
}

export default HeaderProduct;
