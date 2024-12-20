import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Checkout from "./components/Checkout.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/styles/App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
