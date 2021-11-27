import React, { Component } from "react";
import Info from "../Assets/Info.png";
import "../frontPgButtons.css";

class InfoButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => console.log("Info Button - Clicked")}
        className="MenuButton"
      >
        <img src={Info} alt="info" />
      </button>
    );
  }
}

export default InfoButton;
