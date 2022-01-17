import { Component } from "react";

import Header from "./components/Header/index";
import Main from "./components/Main/index";
import Footer from "./components/Footer/index";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
