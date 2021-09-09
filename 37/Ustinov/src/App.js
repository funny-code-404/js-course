import { Component } from "react";

import './App.css';

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <About />
        <Service />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
