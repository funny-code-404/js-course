import React, { Component } from "react";
import "./styles.css";

class BlockTwo extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h4>{this.props.blockTwoH4}</h4>
        <h5>{this.props.blockTwoH5}</h5>
      </div>
    );
  }
}

export default BlockTwo;
