import React from "react";
import "../assets/styles/Checkout.css";
import ProductCart from "../features/ProductDetails/ProductCart.jsx";
import Subtotal from "../components/Subtotal.jsx";
import { useStateValue } from "../components/StateProvider.jsx";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="leftSubTotal">
        <Subtotal />
      </div>

      <div className="rightCheckout">
        <span>
          <h2>Your Shopping Cart has {basket.length} Items</h2>
        </span>

        <div className="productDisplay">
          <ProductCart
            id={123456}
            image="../src/assets/images/product1.jpg"
            name="God Of War: Ragnarok"
            price={3000}
          />
          <ProductCart
            id={123456}
            image="../src/assets/images/product1.jpg"
            name="God Of War: Ragnarok"
            price={3000}
          />
          <ProductCart
            id={123456}
            image="../src/assets/images/product1.jpg"
            name="God Of War: Ragnarok"
            price={3000}
          />
          <ProductCart
            id={123456}
            image="../src/assets/images/product1.jpg"
            name="God Of War: Ragnarok"
            price={3000}
          />
          <ProductCart
            id={123456}
            image="../src/assets/images/product1.jpg"
            name="God Of War: Ragnarok"
            price={3000}
          />
          <ProductCart
            id={123456}
            image="../src/assets/images/product1.jpg"
            name="God Of War: Ragnarok"
            price={3000}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
