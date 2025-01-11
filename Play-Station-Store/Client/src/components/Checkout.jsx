import React, { useEffect } from "react";
import axios from "axios";
import ReactGA from "react-ga4";
import "../../src/assets/styles/Checkout.css";
import ProductCheckout from "../components/ProductDetails/ProductCheckout.jsx";
import quantityCount from "../utils/QuantityCounter.jsx";
import { useStateValue } from "./StateProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
  const [{ basket, user, total }, dispatch] = useStateValue();

  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const total = params.get("total");
  const navigate = useNavigate();

  const buyfunction = async () => {
    let response = await axios.post("http://localhost:5000/payment");

    if (response && response.status === 200) {
      window.location.href = response.data.url;
      console.log(response.data);
    }
  };

  return (
    <div className="checkout">
      <div className="checkoutHeader">
        <h2>Check Out ({quantityCount(basket)} items)</h2>
      </div>
      <div className="checkoutDetails">
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
            <button onClick={buyfunction}>Proceed to Pay</button>
          </div>

          <div className="note">
            <h4>Testing interactively</h4>
            <p>
              When testing interactively, use a card number, such as{" "}
              <b>4242 4242 4242 4242</b>. Enter the card number in the Dashboard
              or in any payment form. Use a valid future date, such as 12/34.
              Use any three-digit CVC (four digits for American Express cards).
              Use any value you like for other form fields.
            </p>
          </div>
        </div>

        <div className="reviewItems">
          <h2>Review Items and Delivery</h2>
          {basket.map((item, index) => (
            <ProductCheckout
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
    </div>
  );
}

export default Checkout;
