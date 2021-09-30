import React from "react";

import Navigation from "./components/Navigation/Navigation"
import Photo from "./components/Photo/Photo";

class App extends React.Component {
  render() {
    return <div className="App">
      <Navigation />
      <Photo />
    </div>;
  }
}

export default App;
