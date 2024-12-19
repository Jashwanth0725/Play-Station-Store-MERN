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
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
