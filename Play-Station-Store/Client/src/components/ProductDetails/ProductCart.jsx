import React, { useState } from "react";
import "../../../../Client/src/assets/styles/ProductCart.css";
import "../../../../Client/src/assets/styles/QuantityCounter.css";

import QuantityCounter from "../../components/QuantityCounter.jsx";
import { useStateValue } from "../../components/StateProvider.jsx";

function ProductCart({ id, name, image, price, quantity }) {
  const [{ basket }, dispatch] = useStateValue();

  //Remove item from basket
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const increaseQuantity = () => {
    dispatch({
      type: "INCREASE_QUANTITY",
      id: id,
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      id: id,
    });
  };

  const [quantityCount, setQuantityCount] = useState(quantity);

  function Increment() {
    setQuantityCount((precount) => precount + 1);
    increaseQuantity();
  }

  function Decrement() {
    setQuantityCount((precount) => precount - 1);
    if (quantityCount <= 1) {
      console.log("Remove Item");
      removeItem();
    }
    decreaseQuantity();
  }

  return (
    <>
      <div className="productCart">
        <div className="productCartImage">
          <img src={image} alt="Product Image"></img>
        </div>

        <div className="productCartInfo">
          <div className="productCartName" data-id={id}>
            <p>{name}</p>
          </div>

          <div className="productPriceAndQuantity">
            <div className="productPrice">
              <small>₹</small>
              <strong>{price}</strong>
            </div>

            <div className="quantity">
              <div className="quantityCounter">
                <button onClick={Decrement}>-</button>
                <span>{quantityCount}</span>
                <button onClick={Increment}>+</button>
              </div>
            </div>
          </div>
          <div className="productUpdate">
            <div className="saveForLater">
              {/* <button>Wish List</button> */}
            </div>
            <div className="removeButton">
              <button onClick={removeItem}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
