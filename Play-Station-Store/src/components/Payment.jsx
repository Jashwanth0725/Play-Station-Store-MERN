import React from "react";
import "../../src/assets/styles/Payment.css";
import ProductCart from "../../src/features/ProductDetails/ProductCart.jsx";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="paymentPage">
      <Link to="/checkout">
        <div className="checkoutHeader">
          <h2>Check Out ({basket.length} items)</h2>
        </div>
      </Link>

      <div className="box1">
        <div className="delivery">
          <h2>Delivery Date</h2>
          <p>{user?.email}</p>
          <p>Kedarnath, Gaurikund</p>
          <p>Rudraprayag, Uttarakhand, India</p>
        </div>
        <div className="payment">
          <h2>Payment Method: </h2>
          <span className="card">Card</span>
          <span className="cashOnDelivery">Cash</span>
          <button>Buy Now</button>
        </div>
      </div>

      <div className="reviewItems">
        <h2>Review Items and Delivery</h2>
        <ProductCart
          id={123456}
          image={"/images/product1.jpg"}
          name={"God Of War: Ragnarok"}
          price={3000}
        />
        <ProductCart
          id={123456}
          image={"/images/product1.jpg"}
          name={"God Of War: Ragnarok"}
          price={3000}
        />
      </div>
    </div>
  );
}

export default Payment;
