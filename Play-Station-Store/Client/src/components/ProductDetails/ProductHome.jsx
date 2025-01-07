import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductStars from "./ProductStars.jsx";
import "../../../../Client/src/assets/styles/ProductHome.css";
import "../../../../Client/src/assets/styles/QuantityCounter.css";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { useStateValue } from "../../components/StateProvider.jsx";

function ProductHome({ id, name, image, price, stars, review }) {
  const [basket, dispatch] = useStateValue();

  const [visible, setVisible] = useState(false);

  //Add item to basket

  const visibleTick = () => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };
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
        quantity: quantity,
      },
    });

    //    // Store the updated basket in localStorage
    // const updatedBasket = [...state.basket, newItem]; // Update basket with the new item
    // localStorage.setItem("cart", JSON.stringify(updatedBasket));
    setQuantityCount(1);
    visibleTick();
  };

  const [quantity, setQuantityCount] = useState(1);

  function Increment() {
    setQuantityCount((precount) => precount + 1);
  }

  function Decrement() {
    // if (count === 0) console.log("Remove Item");
    setQuantityCount((precount) => precount - 1);
  }
  return (
    <div className="productHome">
      <Link to="">
        <div className="productImage">
          <img src={image} alt="Product Image"></img>
        </div>

        <div className="productName" data-id={id}>
          <p>{name}</p>
        </div>
      </Link>

      <div className="productStar">
        <ProductStars stars={stars} />
        <span>{review}</span>
      </div>

      <div className="productHomeQuantity">
        <div className="quantityCounter">
          <button onClick={Decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={Increment}>+</button>
        </div>

        <div className="productPrice">
          <small>₹</small>
          <strong>{price}</strong>
        </div>
      </div>

      <div className="add">
        <button className="addToCart" onClick={addToBasket}>
          Add To Cart
        </button>
        {visible && (
          <span className="addMark">
            <VerifiedRoundedIcon />
            {/* <p>Added</p> */}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProductHome;
