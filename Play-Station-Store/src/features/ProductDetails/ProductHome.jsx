import React from "react";
import Quantity from "../../components/QuantityCounter.jsx";
import ProductStars from "./ProductStars.jsx";
import "../../assets/styles/ProductHome.css";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { useStateValue } from "../../components/StateProvider.jsx";

function ProductHome({ id, name, image, price, stars, review }) {
  const [basket, dispatch] = useStateValue();

  //Add item to basket
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        image: image,
        price: price,
        stars: stars,
        review: review,
      },
    });
  };

  return (
    <div className="productHome">
      <div className="productImage">
        <img src={image} alt="Product Image"></img>
      </div>
      <div className="productName" data-id={id}>
        <p>{name}</p>
      </div>
      <div className="productStar">
        <ProductStars stars={stars} />
        <span>{review}</span>
      </div>
      <div className="productHomeQuantity">
        <Quantity />
        <div className="productPrice">
          <small>₹</small>
          <strong>{price}</strong>
        </div>
      </div>
      <div className="add">
        <button className="addToCart" onClick={addToBasket}>
          Add To Cart
        </button>
        <span className="addMark">
          <VerifiedRoundedIcon />
          {/* <p>Added</p> */}
        </span>
      </div>
    </div>
  );
}

export default ProductHome;
