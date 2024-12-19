import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/"
              element={
                <>
                  <Header /> <Home />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
