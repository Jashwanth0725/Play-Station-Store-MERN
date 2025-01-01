import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../src/assets/styles/Payment.css";
// import axios from "axios";

function Payment() {
  const navigate = useNavigate();
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
          <button>Proceed To CheckOu</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
