import React from "react";
import axios from "axios";
import "./admin-order-card.css";

const OrderCard = ({ order, fetchAdminOrders }) => {

  const handleStatusChange = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(
        `http://localhost:4000/api/order/${order._id}`,
        {
          status: e.target.value,
        });
      fetchAdminOrders();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <article className="order-card">
      <h2><b>Customer Name:</b> {order.customer_name}</h2>
      <div className="customer-info-first">
        <p><b>Phone Number:</b> {order.phone_number}</p>
        <p><b>Address:</b> {order.address}</p>
        <p><b>Payment Method:</b> {order.payment_method}</p>
        <p><b>Total Order Quantity:</b> {order.total_quantity}</p>
        <p><b>Total Order price:</b> {order.total_price}$</p>
      </div>
      <div className="customer-info-second">
        <label htmlFor="order-status">
          <b>Order Status:</b> {order.status}
        </label>
        <select id="order-status" name="status" onChange={handleStatusChange} >
          <option value={order.status}>Choose a new Status</option>
          <option>Submit</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Closed</option>
        </select>
      </div>
      <div className="customer-info-third">
        {order.orderedProducts.length > 0 && (<p className="order-ordered-products-label-in-order-card">Ordered Products:</p>)}
        {order.orderedProducts.length > 0 && (order.orderedProducts.map((product, index) => {
          return <section key={index} className="order-single-product-container-n-order-card" >
            <div className="customer-info-fourth">
              <p>Product {index + 1}:</p>
              <img src={`http://localhost:4000/${product.product.image}`} alt="product image" className="product-image-in-order-card" />
            </div>
            <div className="customer-info-fifth">
              <p><b>Name:</b> {product.product.name}</p>
              <p><b>Price/pc:</b> {product.product.price}$</p>
              <p><b>weight/pc: </b>{product.product.weight} g</p>
              <p><b>Ordered Quantity: </b>{product.quantity}</p>
              <p><b>Total Price:</b> {product.total_price}$</p>
            </div>
          </section>
        }))}
      </div>
    </article>
  )
}

export default OrderCard;