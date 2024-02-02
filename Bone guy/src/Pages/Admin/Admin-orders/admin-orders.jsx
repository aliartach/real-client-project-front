import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../../../Components/Admin-order-card/admin-order-card";

const AdminOrders = () => {
  const [admin_orders, setAdminOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAdminOrders = useCallback(async () => {
    try {
      console.log("fetching orders in admin orders");
      const admin_orders_response = await axios.get("http://localhost:4000/api/order/");
      if (admin_orders_response.data.length === 0) {
        console.error("admin orders array is empty");
      } else {
        setAdminOrders(admin_orders_response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log("finished fetching orders in admin orders");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAdminOrders();
  }, []);

  const handleOrderDelete = async (order) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/order/${order._id}`
      );
      fetchAdminOrders();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="admin-orders-container">
      {!loading ? (admin_orders.map((order, index) => {
        return <div className="order-card-and-button-container-in-admin-orders">
          <OrderCard key={index} order={order} fetchAdminOrders={fetchAdminOrders} />
          <button type="button" className="order-delete-button" onClick={(e) => { e.preventDefault(); handleOrderDelete(order) }}>Delete Order</button>
        </div>
      })
      ) : (
        <p className="loading">Loading Orders</p>
      )
      }
    </section>
  )
};

export default AdminOrders;