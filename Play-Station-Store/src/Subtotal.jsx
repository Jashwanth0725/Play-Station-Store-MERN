import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "./CurrencyFormat";

function Subtotal() {
  return (
    <div className="subTotal">
      <h2>SubTotal</h2>
      <div className="cal">
        <p>SubTotal:</p>
        <p>{CurrencyFormat({ price: 123.45 })}</p>
      </div>
      <div className="">
        <p>This order contains gift</p>
      </div>
    </div>
  );
}

export default Subtotal;
