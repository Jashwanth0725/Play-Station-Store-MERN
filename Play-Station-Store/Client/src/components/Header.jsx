import React, { useState } from "react";
import "../assets/styles/Header.css";
import quantityCount from "../utils/QuantityCounter.jsx";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../../../Client/src/features/Auth/firebase.js";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [isVisible, setisVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <nav className="header">
      <div className="website">
        <div className="leftSide">
          <div className="logo">
            <Link to="/">
              <img src="/images/HeaderLogo.png" alt="Logo"></img>
              {/* Client\src\components\ */}

              {/* src/features/Auth/firebase.js */}
            </Link>
          </div>

          <div className="logoMobile">
            <Link to="/">
              <img src="/images/HeaderLogoMobile.png" alt="Mobile logo"></img>
            </Link>
          </div>
        </div>

        <div className="middle">
          {/* <div className="searchInput searchInputWeb">
            <input type="text" placeholder="Search.."></input>
          </div> */}
        </div>

        <div className="rightSide">
          {/* {visible && (
            <div className="searchInput searchInputMobile">
              <input type="text" placeholder="Search.."></input>
            </div>
          )} */}

          {/* <div
            className="search"
            onClick={() => {
              if (visible) {
                setVisible(false);
              } else {
                setVisible(true);
              }
            }}
          >
            <input type="text" placeholder="Search..."></input>
            <SearchIcon />
          </div> */}

          <div className="profile">
            {/* <span>
              <Link to="profile">
                <AccountCircleIcon />
              </Link>
            </span> */}

            <span className="userName">
              Hello, {!user ? "Guest" : user.email}
            </span>
          </div>

          <div className="loginWeb" onClick={handleAuthentication}>
            <Link to={!user && "/login"}>{user ? "SignOut" : "LogIn"}</Link>
          </div>
          {/* <div className="wishList">
            <Link to="wishList">
              <FavoriteBorderRoundedIcon />
            </Link>
          </div> */}

          <div className="cartDetails">
            <Link to="/basket" className="cart">
              <ShoppingBagOutlinedIcon fontSize="small" />
              <p>{quantityCount()}</p>
            </Link>
          </div>

          <span
            className="sideList"
            onClick={() => {
              if (isVisible) {
                setisVisible(false);
              } else {
                setisVisible(true);
              }
            }}
          >
            <ReorderIcon />
          </span>
        </div>
      </div>

      {isVisible && (
        <>
          <div className="mobile">
            <div
              className="logoSide"
              onClick={() => {
                setisVisible(false);
              }}
            >
              <Link to="/">
                <img src="/images/HeaderLogoMobile.png" alt="logo"></img>
              </Link>

              <span
                className="close"
                onClick={() => {
                  setisVisible(false);
                }}
              >
                <CloseTwoToneIcon fontSize="small " />
              </span>
            </div>

            <span>Hello, {!user ? "Guest" : user.email}</span>

            {/* <span>
              <Link to="profile">
                <p>Profile</p>
              </Link>
            </span> */}

            {/* <Link to="/WishList">
              <span className="wishlistMobile">
                <p>WishList</p>
              </span>
            </Link> */}
            <span
              className="cartDetailsMobile"
              onClick={() => {
                setisVisible(false);
              }}
            >
              <Link to="/basket" className="cart">
                <p>Cart</p>
              </Link>
            </span>

            <div
              className="loginMobile"
              onClick={() => {
                setisVisible(false);
                handleAuthentication();
              }}
            >
              <Link to={!user && "/login"}>{user ? "SignOut" : "LogIn"}</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Header;
