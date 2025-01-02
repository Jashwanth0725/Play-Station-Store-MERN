import React from "react";
import "../../../../Client/src/assets/styles/ProductCheckout.css";
import { useNavigate } from "react-router-dom";

function ProductCheckout({ id, name, image, price, quantity }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="productCheckout">
        <div className="productCheckoutImage">
          <img src={image} alt="Product Image"></img>
        </div>

        <div className="productCheckoutInfo">
          <div className="productCartName" data-id={id}>
            <p>{name}</p>
          </div>

          <div className="productPriceAndQuantity">
            <div className="quantityText">
              <span>Quantity : {quantity}</span>
            </div>
            <span>x</span>
            <span className="productPrice">
              <p>{price}</p>
            </span>
          </div>

          <div className="productUpdate">
            <div className="saveForLater">
              <button
                onClick={() => {
                  navigate(`/basket`);
                }}
              >
                Update
              </button>
            </div>
            <div className="checkoutProductTotal">
              <small>₹ </small>
              <strong>{price * quantity}</strong>
            </div>

            {/* <div className="removeButton">
              <button onClick={removeItem}>Remove</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCheckout;
