import React, { Component } from "react";
import "../frontPgButtons.css";
import Ica from "../Assets/Ica.png";
import Coop from "../Assets/Coop.png";
import ICAText from "../Assets/ICAText.png";
import CoopText from "../Assets/CoopText.png";

//className="buttonLook"
class FrontPageButtons extends React.Component {
  render() {
    console.log("FrontPageButton - Clicked");
    return (
      <div className="Screen " role="group">
        <button
          onClick={() => console.log("FrontPageButton - Clicked")}
          className="StoreButton"
        >
          <img src={Ica} alt="ica" />

          <img src={ICAText} alt="icatext" />
        </button>

        <button
          onClick={() => console.log("FrontPageButton - Clicked")}
          className="StoreButton"
        >
          <img src={Coop} alt="coop" />

          <img src={CoopText} alt="CoopText" />
        </button>

        <button
          onClick={() => console.log("FrontPageButton - Clicked")}
          className="StoreButton"
        >
          <img src={Ica} alt="ica" />
          <img src={ICAText} alt="icatext" />
        </button>
      </div>
    );
  }
}

export default FrontPageButtons;
