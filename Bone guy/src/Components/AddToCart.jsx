import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import './AddToCart.css';

const ShoppingCart = () => {
  return (
    <section className="h-100 h-custom">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th className="h5">Shopping Bag</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img src="https://i.imgur.com/2DsA49b.webp" className="img-fluid rounded-3" style={{ width: "120px" }} alt="Book" />
                      <div className="flex-column ms-4">
                        <p className="mb-2">Name of the product</p>
                        <p className="mb-0">Tag</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <div className="d-flex flex-row">
                      <button className="btn btn-link px-2" disabled>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <input id="form1" min="0" name="quantity" value="2" type="number" className="form-control form-control-sm" style={{ width: "50px" }} readOnly />
                      <button className="btn btn-link px-2" disabled>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0 price" style={{ fontWeight: 500 }}>$9.99</p>
                  </td>
                </tr>
           
              </MDBTableBody>
            </MDBTable>

            <div className="card shadow-2-strong mb-5 mb-lg-0 custom-card">
              <div className="card-body p-4">
                <div className="col-lg-4 col-xl-3">
                  <div className="d-flex justify-content-between subtotal" style={{ fontWeight: 500 }}>
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2">$23.49</p>
                  </div>
                  <hr className="my-4 divider" />
                  <div className="d-flex justify-content-between total" style={{ fontWeight: 500 }}>
                    <p className="mb-2">Total (tax included)</p>
                    <p className="mb-2">$26.48</p>
                  </div>
                  <button type="button" className="btn btn-primary btn-block btn-lg checkout-btn" >
                    <div className="d-flex justify-content-between">
                      <span>Checkout</span>
                      <span>$26.48</span>
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
