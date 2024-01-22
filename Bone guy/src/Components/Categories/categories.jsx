import React from "react";
import "./categories.css";
import catCategory from "../../assets/cat-category.jpg";
import dogCategory from "../../assets/dog-category.jpg";
import { Link } from "react-router-dom";

function categories() {
  return (
    <section>
      <p className="title-categories">categories</p>
      <p className="sub-title-categories">
        Shop our category: Simple ingredients, amazing taste.
      </p>
      <section className="section-categories">
      <Link to="#"> <button className="btn-categories">Shop now</button></Link>
      <Link to="#"> <button className="btn-categories-dog">Shop now</button></Link>
        <section className="section-categories-img">
          <img
            src={catCategory}
            alt="cat-category"
            className="cat-img-category-section"
          />
          <img
            src={dogCategory}
            alt="cat-category"
            className="cat-img-category-section"
          />
        </section>
      </section>
    </section>
  );
}

export default categories;
