import React from "react";
import "./Products.css";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

function Products({ id, name, image, price, stars, review }) {
  return (
    <div className="products">
      <div className="productItems">
        <div className="product">
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

          <div className="productPrice">
            <small>₹</small>
            <strong>{price}</strong>
          </div>
          <div className="add">
            <button className="addToCart">Add To Cart</button>
            <span className="addMark">
              <VerifiedRoundedIcon />
              <p>Added</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
