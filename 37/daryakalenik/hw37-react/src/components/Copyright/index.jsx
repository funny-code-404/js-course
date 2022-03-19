import React, { Component } from "react";
import styles from "./styles.css";

class Copyright extends Component {
  render() {
    return (
      <div className="copyrightWrapper">
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Copyright;
