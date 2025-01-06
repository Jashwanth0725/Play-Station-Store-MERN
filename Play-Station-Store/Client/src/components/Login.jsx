import React, { useState, useEffect } from "react";
import "../assets/styles/Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  auth,
  registerUser,
  signInWithEmailAndPassword,
} from "../features/Auth/firebase";

import ReactGA from "react-ga4";

function Login() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  const navigate = useNavigate();

  const [email, setnewEmail] = useState("");
  const [password, setnewPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log("User signed in:", user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <>
      <div className="login">
        <div className="loginAll">
          <Link to="/">
            <div className="headerLogo">
              <img src="/images/HeaderLogo.png" alt="Header Logo" />
            </div>
          </Link>

          <form className="loginForm">
            <label className="loginFormLabel label1">
              Email :
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setnewEmail(e.target.value)}
                required
              />
            </label>
            <label className="loginFormLabel label2">
              Password :
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setnewPassword(e.target.value)}
                required
              />
            </label>

            <div className="forgotSignIn">
              <Link to="/forgot-password">
                <p>Forgot your password?</p>
              </Link>
              <button type="submit" onClick={signIn}>
                Sign in
              </button>
            </div>

            <div className="loginFormRegister">
              <Link to="/register">
                <p>Don't have an account? Register</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
