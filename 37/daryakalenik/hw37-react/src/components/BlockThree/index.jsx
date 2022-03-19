import React, { Component } from "react";
import "./styles.css";

class BlockThree extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h6>{this.props.blockThreeH6}</h6>
        <p>{this.props.blockThreeP}</p>
      </div>
    );
  }
}

export default BlockThree;
