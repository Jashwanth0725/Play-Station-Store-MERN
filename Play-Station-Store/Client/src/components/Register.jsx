import React, { useState, useEffect } from "react";
import "../assets/styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../features/Auth/firebase";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

function Register() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  const navigate = useNavigate();

  const [email, setnewEmail] = useState("");
  const [password, setnewPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [visible, setVisible] = useState(false);

  //Creating New User Email and Password
  const register = (e) => {
    e.preventDefault();
    registerUser(email, password)
      .then((user) => {
        // Executes when succesfully created user with email and password
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="register">
        <div className="registerAll">
          <Link to="/">
            <div className="headerLogo">
              <img src="/images/HeaderLogo.png" alt="Header Logo" />
            </div>
          </Link>

          <form className="registerForm">
            <label className="registerFormLabel">
              First Name :
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </label>
            <label className="registerFormLabel">
              Last Name :
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </label>

            <label className="registerFormLabel ">
              Email :
              <input
                type="text"
                name="name"
                value={email}
                onChange={(e) => setnewEmail(e.target.value)}
                required
              />
            </label>
            <label className="registerFormLabel">
              Password :
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setnewPassword(e.target.value)}
                required
              />
            </label>

            <div className="registerFormRegister">
              <Link to="/register">
                <button onClick={register}>Register</button>
              </Link>
            </div>
            <div className="registerFormLogin">
              <Link to="/login">Already have an account? Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
