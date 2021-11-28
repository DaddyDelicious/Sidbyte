import React, { Component } from "react";
import "../product.css";
// <div className="ProductContainer">
//<div className="BackgroundContainer"></div>
//</div>

////state variables: id="name",img , exp. date, date added,
class Product extends React.Component {
  render() {
    return (
      <button
        onClick={() => console.log("product Button - Clicked")}
        className="ProductContainer BackgroundContainer"
      >
        Product
      </button>
    );
  }
}

export default Product;
