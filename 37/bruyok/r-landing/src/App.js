//классовые компоненты
import { Component } from "react";

import "normalize.css";
import "./index.css";

import Header from "./components/Header/header";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Footer from "./components/Footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <About />
          <Services />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
