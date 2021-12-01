import React, { Component } from "react";
import "../product.css";

//IMPORTANT: Check "counters.jsx" "onReset" to figure out how to change icon when page is active

////state variables: id="name",img , exp. date, date added,
class Product extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={(productId) =>
            this.props.toggleFavourite(this.props.Product.id)
          }
          className="ProductContainer"
        ></button>
      </div>
    );
  }
}

export default Product;
