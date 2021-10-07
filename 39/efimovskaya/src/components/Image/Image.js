import React from "react";

class Image extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="Some random dog" width="400" height="400" />
      </div>
    );
  }
}
export default Image;
