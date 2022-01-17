import React from "react";
import "./style.css";

class Image extends React.Component {
  render() {
    return (
      <div className="image">
        <img src={this.props.image} alt="Random dog" />
      </div>
    );
  }
}
export default Image;
