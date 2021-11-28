import React, { Component } from "react";
import SecondaryHeader from "../Components/SecondaryHeader";

import "../favPage.css";
import Product from "../Components/Product";
import "../product.css";

//LEARN: https://stackoverflow.com/questions/67048702/how-to-print-out-rows-and-columns-in-my-react-component
//Back button needs to be its own component
class FavPage extends React.Component {
  render() {
    return (
      <div className="FavPageScreen">
        <SecondaryHeader />
        <div className="ProductHolder"></div>
      </div>
    );
  }
}

export default FavPage;
