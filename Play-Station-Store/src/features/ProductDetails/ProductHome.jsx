import React from "react";
import Quantity from "/src/components/QuantityCounter.jsx";
import "/src/assets/styles/ProductHome.css";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

function ProductHome({ id, name, image, price, stars, review }) {
  return (
    <div className="productHome">
      <div className="productImage">
        <img src={image} alt="Product Image"></img>
      </div>
      <div className="productName" data-id={id}>
        <p>{name}</p>
      </div>
      <div className="productStar">
        <span className="stars">
          {Array(stars)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </span>
        <span>{review}</span>
      </div>
      <div className="productHomeQuantity">
        <Quantity />
      </div>

      <div className="add">
        <div className="productPrice">
          <small>₹</small>
          <strong>{price}</strong>
        </div>

        <button className="addToCart">Add To Cart</button>
        <span className="addMark">
          <VerifiedRoundedIcon />
          <p>Added</p>
        </span>
      </div>
    </div>
  );
}

export default ProductHome;
