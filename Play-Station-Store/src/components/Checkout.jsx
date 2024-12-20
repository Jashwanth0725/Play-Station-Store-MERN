import React from "react";
import "../assets/styles/Checkout.css";
import Products from "../features/ProductDetails/Products.jsx";
import Subtotal from "../components/Subtotal.jsx";

function Checkout() {
  return (
    <div className="checkout">
      <div className="leftCheckout">
        <h2>Cart</h2>
        <Products
          id={123456}
          image="../src/assets/images/product1.jpg"
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
