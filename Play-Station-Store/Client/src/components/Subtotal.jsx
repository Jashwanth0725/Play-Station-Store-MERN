import React, { useState } from "react";
import "../assets/styles/Subtotal.css";
import CurrencyFormat from "../utils/CurrencyFormat.jsx";
import { useStateValue } from "./StateProvider.jsx";
import { getBasketTotal, discount, totalPrice } from "../features/reducer.jsx";
import { useNavigate } from "react-router-dom";
import { quantityCount } from "../features/reducer.jsx";

function Subtotal() {
  const navigate = useNavigate();
  const [isGift, setIsGift] = useState(false);
  // const [deliveryOption, setDeliveryOption] = useState("free");
  const [color, setColor] = useState({ backgroundColor: "" });
  const [{ basket }, dispatch] = useStateValue();

  const total = CurrencyFormat({ price: totalPrice(basket) });

  const totalSave = () => {
    dispatch({
      type: "TOTAL_SAVE",
      total: total,
    });
  };

  // totalSave();

  return (
    <div className="subTotal">
      <div className="totalSummary">
        <h3>Total Summary</h3>
        <div className="cal">
          <div>Items ({quantityCount(basket)}) :</div>
          <div>
            {CurrencyFormat({ price: getBasketTotal(basket) })}
            {/* {console.log("This is the basket ", getBasketTotal(basket))} */}
          </div>
        </div>
        <div className="shipping">
          <div>Shipping & Handling :</div>
          <div>Free</div>
        </div>
        <div className="discount">
          <div>Discount 10% :</div>
          <div className="discountAmount">
            - {CurrencyFormat({ price: discount(basket) })}
          </div>
        </div>

        <div className="total">
          <div>
            <h2>Total :</h2>
          </div>
          <div>
            <h2>{total}</h2>
          </div>
        </div>
        {/* <div className="gift">
          <input
            type="checkbox"
            checked={isGift}
            onChange={() => setIsGift(!isGift)}
          />
          <p>This order contains gift</p>
        </div> */}
        <div className="proceedToCheckOut">
          <button
            onClick={() => {
              {
                totalSave();
                basket.length
                  ? navigate("/checkout")
                  : setColor({
                      backgroundColor: "rgb(196, 48, 48)",
                      border: "1px solid red",
                    });
              }
            }}
            style={color}
          >
            {basket.length ? <p>Proceed to Checkout</p> : <p>Cart is Empty</p>}
          </button>
        </div>
      </div>
      {/* <div className="delivery">
        <h3>
          Delivery Date: <span>Monday 27, Jul</span>
        </h3>
        <div className="delivery-options">
          <p>Choose Your Delivery option</p>
          <div className="free">
            <input
              type="radio"
              checked={deliveryOption === "free"}
              name="delivery"
              onChange={() => setDeliveryOption("free")}
            />
            <p>Free Delivery</p>
          </div>
          <div className="fast">
            <input
              type="radio"
              checked={deliveryOption === "fast"}
              name="delivery"
              onChange={() => setDeliveryOption("fast")}
            />
            <p>Fast Delivery +100</p>
          </div>
          <div className="express">
            <input
              type="radio"
              checked={deliveryOption === "express"}
              name="delivery"
              onChange={() => setDeliveryOption("express")}
            />
            <p>Express Fast Delivery +150</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Subtotal;
