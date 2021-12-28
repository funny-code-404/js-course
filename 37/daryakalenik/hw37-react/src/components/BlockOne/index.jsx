import React, { Component } from "react";
import "./styles.css";

class BlockOne extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2>{this.props.blockOneH2}</h2>
        <h3>{this.props.blockOneH3}</h3>
      </div>
    );
  }
}

export default BlockOne;
