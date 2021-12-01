import React, { Component } from "react";
import Products from "./products";

//fix this garbage later
class Stores extends React.Component {
  state = {
    id: "Coop Konsum", //replace with "getStoreName" function later
    productCount: 0, //replace with "getProductCount" function later
  };
  render() {
    const { productCount, stores } = this.props;

    return (
      <div>
        {stores.map((products) => (
          <Products key={products.id} productCount={productCount} />
        ))}
      </div>
    );
  }
}

export default Stores;
