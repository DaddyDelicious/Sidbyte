import React, { Component } from "react";
import "../headers.css";
import "../favPage.css";
import "../product.css";

import products from "../Components/products";
import Product from "../Components/Product";

//LEARN: https://stackoverflow.com/questions/67048702/how-to-print-out-rows-and-columns-in-my-react-component
//Back button needs to be its own component

//IMPORTANT: Check "counters.jsx" "onReset" to figure out how to change icon when page is active
class FavPage extends Component {
  state = {
    products: [{ id: 1, expDate: "2020-06-12", isfavourite: false }],
  };

  constructor() {
    super();
    console.log("Constructor called");
  }

  //Set favourite status to true -- probably wrong
  handleSetFavourite = (Product) => {
    const products = [...this.state.products];
    const index = products.indexOf(Product);
    products[index] = { ...Product };
    products[index].isfavourite = true;
    this.setState({ products });
  };

  //Set favourite status to false -- probably wrong
  handleRemoveFavourite = (Product) => {
    const products = [...this.state.products];
    const index = products.indexOf(Product);
    products[index] = { ...Product };
    products[index].isfavourite = false;
    this.setState({ products });
  };

  //call when isFavourite is set to false.
  handleDelete = (productId) => {
    const products = this.state.products.filter((p) => p.id !== productId);
    this.setState({ products });
  };

  render() {
    return (
      <div className="FavPageScreen">
        <div className="FavPageScreen">
          <div className="Header2">
            <div className="HeaderRubrik">
              <h1 className="HeaderRubrikFont"> Favoriter </h1>
            </div>
          </div>
        </div>
        <products
          products={this.state.products}
          onDelete={this.handleDelete}
          expDate={this.state.products.expDate}
        />
      </div>
    );
  }
}

export default FavPage;

/*
import React, { Component } from "react";
import "../headers.css";
import "../favPage.css";
import "../product.css";

import Product from "../Components/Product";

//LEARN: https://stackoverflow.com/questions/67048702/how-to-print-out-rows-and-columns-in-my-react-component
//Back button needs to be its own component

//IMPORTANT: Check "counters.jsx" "onReset" to figure out how to change icon when page is active
class FavPage extends Component {
  render() {
    return (
      <div className="FavPageScreen">
        <div className="FavPageScreen">
          <div className="Header2">
            <div className="HeaderRubrik">
              <h1 className="HeaderRubrikFont"> Favoriter </h1>
            </div>
          </div>
        </div>

        <Product></Product>
      </div>
    );
  }
}

export default FavPage;
 */
