import React, {useState} from "react";
import Editproduct from "../../Pages/Admin/Admin-products/Edit-product";
import "./Admin-product-card.css";

const ProductCard = ({ product, tags, sub_categories, handleProductDelete, fetchAdminProducts, show_buttons }) => {
  const [product_edit_status, setProductEditStatus] = useState(false);
  //handleProductDelete is in admin-products

  return (
    <>
    <div className="container-of-product-card-and-edit-product-in-admin-products">
      <div className="products-card-container">
        <article className="product-card">
          <div className="product-card-product-image"><img src={`https://real-client-project-back.onrender.com/${product.image}`} alt="product image" className="product-image-in-product-card" /></div>
          <section className="product-details-in-product-card">
            <h2 className="product-name-in-product-card">Name: {product.name}</h2>
            <p className="product-description-in-product-card">Description: {product.description}</p>
            <p className="product-price-in-product-card">Price: {product.price}$</p>
            <p className="product-quantity-in-product-card">Quantity: {product.quantity}</p>
            <p className="product-weight-in-product-card">Weight: {product.weight} g</p>
            <p className="product-category-in-product-card">Category: {product.category} </p>

            {product.sub_categories.length > 0 && (
              <div className="product-subcategories-label-in-product-card">
                <b>Sub Categories:</b>
                {product.sub_categories.map((sub_category, index) => (
                  <span key={index} className="product-single-subcategory-in-product-card">{sub_category.name}</span>
                ))}
              </div>
            )}

            {product.tags.length > 0 && (
              <div className="product-tags-label-in-product-card">
                <b>Tags:</b>
                {product.tags.map((tag, index) => (
                  <span key={index} className="product-single-tag-in-product-card">{tag.name}</span>
                ))}
              </div>
            )}

            {product.featured && <p className="product-featured-in-product-card">Featured</p>}
          </section>
          {show_buttons &&
            <section className="edit-delete-product-in-product-card-buttons-container">
              <button type="button" className="edit-product-button-in-product-card" onClick={() => setProductEditStatus(true)}>Edit</button>
              <button type="button" className="delete-product-button-in-product-card" onClick={() => handleProductDelete(product)}>Delete</button>
            </section>
          }
        </article>
      </div>
      <br/>
      {/* {product_edit_status &&
      <section className="edit-product-in-admin-products">
        <Editproduct tags={tags} sub_categories={sub_categories} setProductEditStatus={setProductEditStatus} product={product} fetchAdminProducts={fetchAdminProducts} />
      </section>
      } */}
    </div >
    {product_edit_status &&
      <section className="edit-product-in-admin-products">
        <Editproduct tags={tags} sub_categories={sub_categories} setProductEditStatus={setProductEditStatus} product={product} fetchAdminProducts={fetchAdminProducts} />
      </section>
      }
    </>
  )
}

export default ProductCard;