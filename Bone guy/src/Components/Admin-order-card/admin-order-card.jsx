import React from "react";
import axios from "axios";
import "./admin-order-card.css";

const OrderCard = ({order, fetchAdminOrders}) => {

  const handleStatusChange = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(
        `https://real-client-project-back.onrender.com/api/order/${order._id}`,
        {
          status: e.target.value,
        });
      fetchAdminOrders();
    } catch (error) {
      console.error(error);
    }
  }

  return(
    <article className="order-card">
        <h2 className="order-customer-name-in-order-card">Customer Name: {order.customer_name}</h2>
        <p className="order-phone-number-in-order-card">Phone Number: {order.phone_number}</p>
        <p className="order-address-in-order-card">Address: {order.address}</p>
        <br/>
        <p className="order-payment-method-in-order-card">Payment Method: {order.payment_method}</p>
        <p className="order-total-quantity-in-order-card">Total Order Quantity: {order.total_quantity}</p>
        <p className="order-total-price-in-order-card">Total Order price: {order.total_price}$</p>
        <br/>
        <label htmlFor="order-status" className="admin-order-card-status-input">
          Order Status: {order.status}
        </label>
        <br/>
        <select id="order-status" name="status" onChange={handleStatusChange} >
          <option value={order.status}>Choose a new Status</option>
          <option>submit</option>
          <option>processing</option>
          <option>shipped</option>
          <option>delivered</option>
          <option>closed</option>
        </select>
        <br/>
        {order.orderedProducts.length > 0 && (<p className="order-ordered-products-label-in-order-card">Ordered Products:</p>)}
        {order.orderedProducts.length > 0 && (order.orderedProducts.map((product, index) => {
          return <section key={index} className="order-single-product-container-n-order-card" >Product {index+1}:
            <br/>
            <img src={`https://real-client-project-back.onrender.com/${product.product.image}`} alt="product image" className="product-image-in-order-card"/>
            <p className="order-single-product-name-in-order-card">Name: {product.product.name}</p>
            <p className="order-single-product-price-in-order-card">Price/pc: {product.product.price}$</p>
            <p className="order-single-product-weight-in-order-card">weight/pc: {product.product.weight} g</p>
            <p className="order-single-product-quantity-in-order-card">Ordered Quantity: {product.quantity}</p>
            <p className="order-single-product-total-price-in-order-card">Total Price: {product.total_price}$</p>
          </section>
        }))}
    </article>
  )
}

export default OrderCard;