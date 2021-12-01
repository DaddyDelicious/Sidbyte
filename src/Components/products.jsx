import React, { Component } from "react";
import "../product.css";
import Hjärta from "../Assets/Hjärta.png";
import Product from "./Product";

//IMPORTANT: Check "counters.jsx" "onReset" to figure out how to change icon when page is active

//state variables: id="name",img = logo , # products, # liked products,
class Products extends React.Component {
  render() {
    //create ToggleFavourite function in product component
    //add more (below) when more functions are needed
    const { togglefavourite, products, expDate, onDelete } = this.props;

    return (
      <div>
        <button onClick={togglefavourite}>
          <img src={Hjärta} alt="hjärta" />
        </button>
        {products.map((Product) => (
          <Product
            key={Product.id}
            onDelete={onDelete}
            isfavourite={togglefavourite}
            expDate={expDate}
          />
        ))}
      </div>
    );
  }
}

export default Products;
