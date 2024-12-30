import React from "react";
import "../../src/assets/styles/Payment.css";
import ProductCart from "../components/ProductDetails/ProductCart.jsx";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
// import { quantityCount } from "../features/reducer.jsx";
import { quantityCount } from "../features/reducer.jsx";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="paymentPage">
      <Link to="/checkout">
        <div className="checkoutHeader">
          <h2>Check Out ({quantityCount(basket)} items)</h2>
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
        {basket.map((item, index) => (
          <ProductCart
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Payment;
