import React, { Component } from 'react';
import SideComponent from './side';
import MainComponent from './main';
import './style.css';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <SideComponent />
        <MainComponent />
      </div>
    );
  }
}

export default Content;
