import React, { Component } from "react";
import miniLogo from "./IMAGE.png";
import styles from "./styles.css";

class MiniLogo extends Component {
  render() {
    return (
      <div className="miniLogo">
        <img src={miniLogo}></img>
      </div>
    );
  }
}

export default MiniLogo;
