import React from "react";
import "/src/assets/styles/ProductCart.css";
import QuantityCounter from "/src/components/QuantityCounter.jsx";

function ProductCart({ id, name, image, price }) {
  return (
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
            <QuantityCounter />
          </div>
        </div>
        <div className="productUpdate">
          <div className="saveForLater">
            <button>Save For Later</button>
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
