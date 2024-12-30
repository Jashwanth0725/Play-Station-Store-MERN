import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../src/assets/styles/Payment.css";
import axios from "axios";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const total = params.get("total");

  const buyfunction = async () => {
    let response = await axios.post("http://localhost:5000/payment");

    if (response && response.status === 200) {
      window.location.href = response.data.url;
      console.log(response.data);
    }
  };

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
          <button onClick={buyfunction}>Proceed To CheckOu</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
