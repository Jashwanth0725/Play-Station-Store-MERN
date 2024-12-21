import React from "react";
import "/src/assets/styles/ProductCart.css";
import QuantityCounter from "/src/components/QuantityCounter.jsx";

function ProductCart({ id, name, image, price }) {
  return (
    <div className="productCart">
      <div className="productImage">
        <img src={image} alt="Product Image"></img>
      </div>

      <div className="productInfo">
        <div className="productName" data-id={id}>
          <p>{name}</p>
        </div>
        <div className="productPrice">
          <small>₹</small>
          <strong>{price}</strong>
        </div>
        <div className="productUpdate">
          <div className="quantityCounter">
            <QuantityCounter />
          </div>

          <div className="removeButton">
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
