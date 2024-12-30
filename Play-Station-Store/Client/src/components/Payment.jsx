import React from "react";
import { useLocation } from "react-router-dom";
import "../../src/assets/styles/Payment.css";

function Payment() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const total = params.get("total");

  return (
    <div>
      <div className="totalSummary">
        <div className="total">
          <div>
            <h2>Total :</h2>
          </div>
          <div>
            <h2>{total}</h2>
          </div>
        </div>
        <div className="proceedToCheckOut">
          <button onClick={(e) => navigate(`/checkout?total=${total}`)}>
            Proceed To CheckOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
