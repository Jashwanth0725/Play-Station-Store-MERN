import { useState } from "react";
import React from "react";
import "../../../Client/src/assets/styles/QuantityCounter.css";

function QuantityCounter() {
  const [count, setCount] = useState(1);

  function Increment() {
    setCount((precount) => precount + 1);
  }

  function Decrement() {
    if (count === 0) console.log("Remove Item");
    setCount((precount) => precount - 1);
  }
  return (
    <>
      <div className="quantityCounter">
        <button onClick={Decrement}>-</button>
        <span>{count}</span>
        <button onClick={Increment}>+</button>
      </div>
    </>
  );
}

export default QuantityCounter;
