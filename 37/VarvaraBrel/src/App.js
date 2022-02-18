import React, { Component } from 'react';

import Header from './components/header/index';
import Nav from './components/navigation/index';
import Content from './components/content/index';
import Footer from './components/footer/index';

import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
