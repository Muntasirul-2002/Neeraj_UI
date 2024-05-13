import React from "react";
import "../styles/product.css";
import Navbar from "../components/Navbar";
const Homepage = () => {
  return (
    <>
      <Navbar />

      <div>
        <h1 className="d-flex justify-content-center mt-4">Our Products</h1>
        <div class="container">
          <div class="product-row">
            <div class="product">
              <div class="wrapper">
                <div class="banner-image"></div>
                <h1>Product 1</h1>
              </div>
              <div class="button-wrapper">
                <button class="btn outline">DETAILS</button>
                <button class="btn fill">BUY NOW</button>
              </div>
            </div>
            <div class="product">
              <div class="wrapper">
                <div class="banner-image"></div>
                <h1>Product 2</h1>
              </div>
              <div class="button-wrapper">
                <button class="btn outline">DETAILS</button>
                <button class="btn fill">BUY NOW</button>
              </div>
            </div>
            <div class="product">
              <div class="wrapper">
                <div class="banner-image"></div>
                <h1>Product 3</h1>
              </div>
              <div class="button-wrapper">
                <button class="btn outline">DETAILS</button>
                <button class="btn fill">BUY NOW</button>
              </div>
            </div>
            <div class="product">
              <div class="wrapper">
                <div class="banner-image"></div>
                <h1>Product 4</h1>
              </div>
              <div class="button-wrapper">
                <button class="btn outline">DETAILS</button>
                <button class="btn fill">BUY NOW</button>
              </div>
            </div>
          </div>
          <div class="product-row">
            <div class="product">
              <div class="wrapper">
                <div class="banner-image"></div>
                <h1>Product 5</h1>
              </div>
              <div class="button-wrapper">
                <button class="btn outline">DETAILS</button>
                <button class="btn fill">BUY NOW</button>
              </div>
            </div>
            <div class="product">
              <div class="wrapper">
                <div class="banner-image"></div>
                <h1>Product 6</h1> 
              </div>
              <div class="button-wrapper">
                <button class="btn outline">DETAILS</button>
                <button class="btn fill">BUY NOW</button>
              </div>
            </div>
            <div class="product">
              <div class="wrapper">
                <div class="banner-image"></div>
                <h1>Product 7</h1>
              </div>
              <div class="button-wrapper">
                <button class="btn outline">DETAILS</button>
                <button class="btn fill">BUY NOW</button>
              </div>
            </div>
            <div class="product">
              <div class="wrapper">
                <div class="banner-image"></div>
                <h1>Product 8</h1>
              </div>
              <div class="button-wrapper">
                <button class="btn outline">DETAILS</button>
                <button class="btn fill">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
