import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Checkout from "./Checkout";
import Subtotal from "./Subtotal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

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
