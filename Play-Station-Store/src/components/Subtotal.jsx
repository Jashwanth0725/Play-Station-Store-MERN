import React from "react";
import "../assets/styles/Subtotal.css";
import CurrencyFormat from "../utils/CurrencyFormat.jsx";

function Subtotal({ itemsPrice, discount, totalPrice }) {
  return (
    <div className="subTotal">
      <div className="totalSummary">
        <h3>Total Summary</h3>
        <div className="cal">
          <p>Items(no of Items): {CurrencyFormat({ price: itemsPrice })}</p>
        </div>

        <div className="shipping">
          <p>Shipping & Handling: Free</p>
        </div>
        <div className="discount">
          <p>Discount: {CurrencyFormat({ price: discount })}</p>
        </div>

        <div className="gift">
          <input type="checkbox" />
          <p>This order contains gift</p>
          <p>+20</p>
        </div>

        <div className="total">
          <h2>Total: {CurrencyFormat({ price: totalPrice })}</h2>
        </div>
      </div>

      <div className="delivery">
        <h3>
          Delivery Date: <span>Monday 27, Jul </span>
        </h3>

        <div className="delivery-options">
          <p>Choose Your Delivery option</p>
          <div className="free">
            <input type="radio" checked="true" name="delivery" />
            <p>Free Delivery</p>
          </div>

          <div className="fast">
            <input type="radio" name="delivery" />
            <p>Fast Delivery +100</p>
          </div>

          <div className="express">
            <input type="radio" name="delivery" />
            <p>Express Fast Delivery +150</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subtotal;
