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
        <section className="section-categories-img">
          <section className="section-categories-img-cat">

            <img
              src={catCategory}
              alt="cat-category"
              className="cat-img-category-section"
            />
                      <button>Shop now</button>

          </section>
      

          <section className="section-categories-img-cat section-dog">

            <img
              src={dogCategory}
              alt="cat-category"
              className="cat-img-category-section "
            />
                      <button>Shop now</button>


          </section>
        </section>
      </section>
    </section>
  );
}

export default categories;
