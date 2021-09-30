import React from "react";

class Photo extends React.Component {
  // randomDogUrl = "https://dog.ceo/api/breeds/image/random"
  // breedRandomUrl = "https://dog.ceo/api/breed/${breedName}/images/random"
  constructor(props) {
    super(props);
    this.state = {
      randomDogUrl: "",
    };
  }


  async componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          randomDogUrl: result.message,
        })
      });
  }

  render() {
    return <img src={this.state.randomDogUrl}  alt="dog" ></img>;
  }
}

export default Photo;
