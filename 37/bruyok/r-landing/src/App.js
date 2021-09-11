//классовые компоненты
import { Component } from "react";

import "normalize.css";

import Header from "./components/Header/header";
import About from "./components/About/about";
import Servises from "./components/Servises/servises";
import Footer from "./components/Footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <About />
          <Servises />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
