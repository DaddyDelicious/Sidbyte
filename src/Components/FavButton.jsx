import React, { Component } from "react";
import Hjärta from "../Assets/Hjärta.png";
import "../frontPgButtons.css";

class FavButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => console.log("fav Button - Clicked")}
        className="MenuButton"
      >
        <img src={Hjärta} alt="hus" />
      </button>
    );
  }
}

export default FavButton;
