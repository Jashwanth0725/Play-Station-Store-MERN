import React from "react";
import "../assets/styles/Checkout.css";
import ProductCart from "../features/ProductDetails/ProductCart.jsx";
import Subtotal from "../components/Subtotal.jsx";
import { useStateValue } from "../components/StateProvider.jsx";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="leftSubTotal">
        <Subtotal />
      </div>

      <div className="rightCheckout">
        <span>
          <h2>
            Hello,<p>{user?.email}</p>
            Your Shopping Cart has {basket.length} Items
          </h2>
        </span>

        <div className="productDisplay">
          {basket.map((item, index) => (
            <ProductCart
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
