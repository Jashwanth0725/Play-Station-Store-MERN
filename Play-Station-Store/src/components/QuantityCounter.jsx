import { useState } from "react";
import React from "react";

function QuantityCounter() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount((precount) => precount + 1);
  }

  function Decrement() {
    if (count === 0) console.log("Can't decrement below 0");
    setCount((precount) => precount - 1);
  }
  return (
    <>
      <button onClick={Decrement}>-</button>
      <span>{count}</span>
      <button onClick={Increment}>+</button>
    </>
  );
}

export default QuantityCounter;
