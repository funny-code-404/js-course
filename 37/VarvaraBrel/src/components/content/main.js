import React, { Component } from 'react';
import Post from './post';

class MainContent extends Component {
  render() {
    return (
      <div className="main">
        <Post />
        <br />
        <Post />
      </div>
    );
  }
}

export default MainContent;
