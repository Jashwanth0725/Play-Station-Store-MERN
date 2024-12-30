import React from "react";
import "../assets/styles/Checkout.css";
import ProductCart from "../components/ProductDetails/ProductCart.jsx";
import Subtotal from "../components/Subtotal.jsx";
import { useStateValue } from "../components/StateProvider.jsx";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const quantityCount = () => {
    let count = 0;
    basket.forEach((item) => {
      count += item.quantity;
    });
    return count;
  };

  return (
    <div className="checkout">
      <span className="checkoutUser">
        <h2>
          <pre>
            Hello, <span>{user?.email}</span>
          </pre>
        </h2>
        <br></br>
        <h3>Your Shopping Cart has {quantityCount()} Items</h3>
      </span>

      <div className="checkoutDetails">
        <div className="leftSubTotal">
          <Subtotal />
        </div>

        <div className="rightCheckout">
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

export default Checkout;
