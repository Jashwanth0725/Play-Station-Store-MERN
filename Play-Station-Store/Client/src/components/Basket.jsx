import React from "react";
import "../assets/styles/Basket.css";
import ProductCart from "./ProductDetails/ProductCart.jsx";
import Subtotal from "./Subtotal.jsx";
import { useStateValue } from "./StateProvider.jsx";
import { quantityCount } from "../features/reducer.jsx";

function Basket() {
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
        <div className="leftSubTotal">
          <Subtotal />
        </div>

        <div className="rightBasket">
          <div className="productDisplay">
            {basket && basket.length > 0 ? (
              basket.map((item, index) => (
                <ProductCart
                  key={index}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))
            ) : (
              <img src="/images/emptyCart.png" alt="Empty Cart" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
