import React from "react";

function CurrencyFormat({ price }) {
  console.log("This is the price ", price);
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);

  return formattedPrice;
}

export default CurrencyFormat;
