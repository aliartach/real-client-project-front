import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./HeaderProduct.css";
import Img from "../../assets/header-product.jpg";
function HeaderProduct() {
  return (
    <>
      <section src={Img} className="header-product" >
      <Link to={"http://localhost:5173/cart"}><img className="cart-icon" src="/shopping-cart .png" alt="carticon"/></Link>
      <Navbar />
      </section>
    </>
  );
}

export default HeaderProduct;
