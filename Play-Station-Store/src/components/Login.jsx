import HeaderLogo from "../assets/images/HeaderLogo.png";
import React from "react";
import "../assets/styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login">
        <div className="loginAll">
          <Link to="/">
            <div className="headerLogo">
              <img src={HeaderLogo} alt="Header Logo" />
            </div>
          </Link>

          <form className="loginForm">
            <label className="loginFormLabel">
              Username:
              <input type="text" name="name" />
            </label>
            <label className="loginFormLabel">
              Password:
              <input type="password" name="password" />
            </label>
            <Link to="/forgot-password">
              <p>Forgot your password?</p>
            </Link>
            <button type="submit">Sign in</button>

            <div className="loginFormRegister">
              <p>Don't have an account?</p>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
