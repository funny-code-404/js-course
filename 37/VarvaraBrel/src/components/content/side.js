import React, { Component } from 'react';

class SideContent extends Component {
  render() {
    return (
      <div className="side">
        <h2>About Me</h2>
        <h5>Photo of me</h5>
        <img className="img" src="https://via.placeholder.com/250x200" />
        <p>
          Some text about me Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>
      </div>
    );
  }
}

export default SideContent;
