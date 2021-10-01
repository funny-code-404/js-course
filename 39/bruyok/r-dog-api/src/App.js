import React from "react";

import Navigation from "./components/Navigation/Navigation";
import Photo from "./components/Photo/Photo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomDogUrl: "",
    };

    this.fetchRandomDog = this.fetchRandomDog.bind(this);
  }

  async fetchRandomDog(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        randomDogUrl: data.message,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleClick = (event) => {
    const name = event.target.name;
    let breedRandomUrl = `https://dog.ceo/api/breed/${name}/images/random`;
    this.fetchRandomDog(breedRandomUrl);
  };

  render() {
    const {randomDogUrl} = this.state;
    
    return (
      <div className="App">
        <Navigation handleClick={this.handleClick} />
        <Photo
          fetchRandomDog={this.fetchRandomDog}
          url={randomDogUrl}
        />
      </div>
    );
  }
}

export default App;
