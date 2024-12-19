import React from "react";
import "./Checkout.css";
import Products from "./Products";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="leftCheckout">
        <h2>Cart</h2>
        <Products
          id={123456}
          image="../images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
        />
      </div>
      <div className="rightSubTotal">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
