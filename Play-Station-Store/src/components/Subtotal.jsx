import React, { useState } from "react";
import "../assets/styles/Subtotal.css";
import CurrencyFormat from "../utils/CurrencyFormat.jsx";
import { useStateValue } from "./StateProvider.jsx";

function Subtotal({ itemsPrice, discount, totalPrice }) {
  const [isGift, setIsGift] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("free");
  const [{ basket }] = useStateValue();
  return (
    <div className="subTotal">
      <div className="totalSummary">
        <h3>Total Summary</h3>
        <div className="cal">
          <p>
            Items ({basket.length}) : {CurrencyFormat({ price: itemsPrice })}
          </p>
        </div>
        <div className="shipping">
          <p>Shipping & Handling : Free</p>
        </div>
        <div className="discount">
          <p>Discount : {CurrencyFormat({ price: discount })}</p>
        </div>
        <div className="gift">
          <input
            type="checkbox"
            checked={isGift}
            onChange={() => setIsGift(!isGift)}
          />
          <p>This order contains gift</p>
          <p>+20</p>
        </div>
        <div className="total">
          <h2>Total : {CurrencyFormat({ price: totalPrice })}</h2>
        </div>
      </div>
      <div className="delivery">
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
      </div>
    </div>
  );
}

export default Subtotal;
