import React from "react";
import Dogs from "./components/Dogs/Dogs";
import Image from "./components/Image/Image";


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    };

    this.getImageOfRandomDog = this.getImageOfRandomDog.bind(this);
  }
  
   componentDidMount() {
    this.getRandomDog();
  }


  getRandomDog = async () => {
    try {
      const resp = await fetch('https://dog.ceo/api/breeds/image/random');
      const dog = await resp.json();
      this.setState({
         image: dog.message
        });
    } catch (error) {
      console.log(error);
    }
  }

  async getImageOfRandomDog(breedName) {
    try {
    const response = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random` ) 
    if(!response.ok) {
      throw new Error();
    }
  
    const data = await response.json();
    this.setState({
      image: data.message,
    });
  }
  catch (error) {
    console.log(error)
  }
  }

  render() {
    return (
      <div>
        <Dogs getImageOfRandomDog={this.getImageOfRandomDog} />
        <Image image={this.state.image} />
      </div>
    );
  }
}

export default App;
