import React, { Component } from "react";
import "../frontPgButtons.css";
import FrontPageButtons from "../Components/FrontPgButtons";
import Header from "../Assets/Header.png";
import Rubrik1 from "../Assets/Rubrik1.png";
import Rubrik2 from "../Assets/Rubrik2.png";
import BasicExample from "../example";

class FrontPage extends React.Component {
  render() {
    return (
      <div className="pageScreen">
        <img src={Header} alt="header" />
        <img src={Rubrik1} alt="r1" />
        <img src={Rubrik2} alt="r2" />
        <FrontPageButtons></FrontPageButtons>
      </div>
    );
  }
}

export default FrontPage;
