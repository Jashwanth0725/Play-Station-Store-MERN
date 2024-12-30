import React from "react";
import "../../src/assets/styles/Checkout.css";
import ProductCart from "../components/ProductDetails/ProductCart.jsx";
import { useStateValue } from "./StateProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { quantityCount } from "../features/reducer.jsx";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const total = params.get("total");
  const navigate = useNavigate();

  return (
    <div className="checkout">
      <div className="checkoutHeader">
        <h2>Check Out ({quantityCount(basket)} items)</h2>
      </div>

      <div className="box1">
        <div className="delivery">
          <h2>Delivery Address</h2>
          <p>{user?.email}</p>
          <p>Kedarnath, Gaurikund</p>
          <p>Rudraprayag, Uttarakhand, India</p>
        </div>
        <div className="checkoutPayment">
          <h2>Total : {total}</h2>
          {/* <span className="card">Card</span>
          <span className="cashOnDelivery">Cash</span> */}
          <button
            onClick={(e) => {
              navigate(`/payment?total=${total}`);
            }}
          >
            Buy Now {total}
          </button>
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

export default Checkout;
