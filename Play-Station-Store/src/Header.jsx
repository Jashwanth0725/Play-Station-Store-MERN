import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <div className="leftSide">
        <div className="logo">
          <Link to="./">
            <img src="../../images/logo.png" alt="logo"></img>
          </Link>
        </div>
      </div>

      <div className="rightSide">
        <div className="search">
          {/* <input type='text' placeholder='Search...'></input> */}
          <SearchIcon className="searchLogo" />
        </div>

        <div className="login">
          <a href="">Login</a>
        </div>
        <div className="cartDetails">
          <Link to="./checkout" className="cart">
            <ShoppingBagOutlinedIcon className="cartIcon" />
            <p>0</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
