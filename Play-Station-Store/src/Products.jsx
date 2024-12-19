import React from "react";
import "./Products.css";

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

          <button className="addToCart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
