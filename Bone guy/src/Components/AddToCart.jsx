
import React, { useContext,useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../context/cart";
import './AddToCart.css';

const ShoppingCart = () => {
  const { cartItems,clearCart, getCartTotal, setCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
   const incrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    console.log("this is updated cart", updatedCart);
    setCartItems(updatedCart);
  };

  const decrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    console.log("this is updated cart", updatedCart);
    setCartItems(updatedCart);
  };
console.log("cart items",cartItems)
  return (
    <section className="h-100 h-custom">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
          <button
                type="button"
                className="btn btn-primary btn-block btn-lg clear-btn"
                onClick={() => {
                  const confirmClear = window.confirm(
                    "Are you sure you want to clear the cart?"
                  );
                  if (confirmClear) {
                    clearCart();
                    setQuantity(0);
                  }
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span>Clear</span>
                </div>
              </button>
          <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th className="h5">Shopping Bag</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img src={item.image} className="img-fluid rounded-3" style={{ width: "120px" }} alt={item} />
                        <div className="flex-column ms-4">
                          <p className="mb-2">{item.name}</p>
                          <p className="mb-0">{item.tag}</p>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle">
                      <div className="d-flex flex-row">
                      <button onClick={(e) => {decrementQuantity(item._id)}}>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input
                          id={`form-${item._id}`}
                          min="0"
                          name="quantity"
                          value={item.quantity}
                          type="number"
                          className="form-control form-control-sm"
                          style={{ width: "70px" }}
                          readOnly
                        />
                         <button onClick={(e) => {incrementQuantity(item._id)}}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </td>
                    <td className="align-middle">
                      <p className="mb-0 price" style={{ fontWeight: 500 }}>
                        ${item.price * item.quantity}
                      </p>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
            <div className="card shadow-2-strong mb-5 mb-lg-0 custom-card">
              <div className="card-body p-4">
                <div className="col-lg-4 col-xl-3">
                  <div className="d-flex justify-content-between subtotal" style={{ fontWeight: 500 }}>
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2">${getCartTotal()}</p>
                  </div>
                  <hr className="my-4 divider" />
                  <div className="d-flex justify-content-between total" style={{ fontWeight: 500 }}>
                    <p className="mb-2">Total (tax included)</p>
                    <p className="mb-2">${getCartTotal()}</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-block btn-lg checkout-btn"
                  >
                    <div className="d-flex justify-content-between">
                      <span>Checkout</span>
                      <span>${getCartTotal()}</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
