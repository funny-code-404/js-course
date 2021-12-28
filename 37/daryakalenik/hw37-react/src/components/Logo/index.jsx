import React, { Component } from "react";
import "./styles.css";
import logo from "./IMAGE.png";

class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo}></img>
      </div>
    );
  }
}

export default Logo;
