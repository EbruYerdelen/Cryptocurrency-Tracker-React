import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";


const Header = () => {
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState()
  console.log(currency)

  function redirect() {
    navigate("/");
  }


  return (
    <div className="header">
      <h1 className="header-text" onClick={redirect}>
        Crypto Hunter
      </h1>
      <select
        name="currency"
        id="currency-select"
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="USD">
          USD
        </option>
        <option value="INR">
          INR
        </option>
      </select>
    </div>
  );
};

export default Header;
