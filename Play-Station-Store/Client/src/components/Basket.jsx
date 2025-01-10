import React, { useEffect } from "react";
import "../assets/styles/Basket.css";
import ProductCart from "./ProductDetails/ProductCart.jsx";
import Subtotal from "./Subtotal.jsx";
import { useStateValue } from "./StateProvider.jsx";
import { quantityCount } from "../features/reducer.jsx";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

function Basket() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="basket">
      <span className="basketUser">
        <h2>
          <pre>
            Hello, <span>{user?.email}</span>
          </pre>
        </h2>
        <br></br>
        <h3>Your Shopping Cart has {quantityCount(basket)} Items</h3>
      </span>

      <div className="basketDetails">
        {basket && basket.length > 0 ? (
          <>
            <div className="leftSubTotal">
              <Subtotal />
            </div>

            <div className="rightBasket">
              <div className="productDisplay">
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
          </>
        ) : (
          <img src="/images/Empty Cart.png" alt="Empty Cart" />
        )}
      </div>
    </div>
  );
}

export default Basket;

//
