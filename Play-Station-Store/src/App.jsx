import React, { useEffect } from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Checkout from "./components/Checkout.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import { auth } from "/src/firebase.js";
import { useStateValue } from "./components/StateProvider.jsx";
// import { DisplaySettings } from "@mui/icons-material";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when app component loads

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // console.log("user is >>", authUser);

      if (authUser) {
        //user is logged in / already logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <div className="container">
          <Routes>
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
