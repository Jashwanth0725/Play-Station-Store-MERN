import React from "react";
import "/src/assets/styles/ProductCart.css";

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
          <div className="quantity">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="1">6</option>
              <option value="2">7</option>
              <option value="3">8</option>
              <option value="4">9</option>
              <option value="5">10</option>
            </select>
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
