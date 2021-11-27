import React, { Component } from "react";
import "../frontPgButtons.css";
import Hus from "../Assets/Hus.png";

class HomeButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => console.log("home Button - Clicked")}
        className="MenuButton"
      >
        <img src={Hus} alt="hus" />
      </button>
    );
  }
}

export default HomeButton;
