import React from "react";
import "./Home.css";
import Products from "./Products";

function Home() {
  return (
    <div className="home">
      <div className="image">
        <img src="../images/ps4.jpg" alt="img"></img>
      </div>

      <div className="section">
        <div className="bestSeller">
          <a href="">Best Seller</a>
        </div>
        <div className="console">
          <a href="">Console</a>
        </div>
        <div className="games">
          <a href="">Games</a>
        </div>
        <div className="accessories">
          <a href="">Accessories</a>
        </div>
      </div>

      <div className="products">
        <Products
          id={123456}
          image="../images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={5}
          review={27}
        />
        <Products
          id={1234567}
          image="../images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={4}
          review={27}
        />
        <Products
          id={12345678}
          image="../images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={2}
          review={27}
        />
        <Products
          id={123456789}
          image="../images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={1}
          review={27}
        />
        <Products
          id={1234567890}
          image="../images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={1}
          review={27}
        />
        <Products
          id={12345}
          image="../images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={5}
          review={27}
        />
        <Products
          id={1234}
          image="../images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={1}
          review={27}
        />
        <Products
          id={123}
          image="../images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={1}
          review={27}
        />
        <Products
          id={12}
          image="../images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={1}
          review={27}
        />
        <Products
          id={1}
          image="../images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={1}
          review={27}
        />
      </div>
    </div>
  );
}

export default Home;
