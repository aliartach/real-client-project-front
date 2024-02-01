import React, {useState} from "react";
import Editproduct from "../../Pages/Admin/Admin-products/Edit-product";
import "./Admin-product-card.css";

const ProductCard = ({product, tags, sub_categories, setProductEditStatus, product_edit_status, fetchAdminProducts}) => {
  //handleProductDelete is in admin-products

  return(
  <div className="container-of-product-card-and-edit-product-in-admin-products">
    <article className="product-card">
      <img src={`http://localhost:4000/${product.image}`} alt="product image" className="product-image-in-product-card"/>
      <section className="product-details-in-product-card">
        <h2 className="product-name-in-product-card">Name: {product.name}</h2>
        <p className="product-description-in-product-card">Description: {product.description}</p>
        <p className="product-price-in-product-card">Price: {product.price}$</p>
        <p className="product-quantity-in-product-card">Quantity: {product.quantity}</p>
        <p className="product-weight-in-product-card">Weight: {product.weight} g</p>
        <p className="product-category-in-product-card">Category: {product.category} </p>
        {product.sub_categories.length >0 && <p className="product-subcategories-label-in-product-card">Sub Categories:</p>}
        {product.sub_categories.length > 0 && product.sub_categories.map((sub_category, index) => {
          return <p key={index} className="product-single-subcategory-in-product-card">{sub_category.name}</p>
        })}
        {product.tags.length > 0 && <p className="product-tags-label-in-product-card">Tags:</p>}
        {product.tags.length > 0 && product.tags.map((tag, index) => {
          return <p key={index} className="product-single-tag-in-product-card">{tag.name}</p>
        })}
        {product.featured && <p className="product-featured-in-product-card">Featured</p>}
      </section>
    </article>
    {product_edit_status && <Editproduct tags={tags} sub_categories={sub_categories} setProductEditStatus={setProductEditStatus} product={product} fetchAdminProducts={fetchAdminProducts} />}
  </div>
  )
}

export default ProductCard;