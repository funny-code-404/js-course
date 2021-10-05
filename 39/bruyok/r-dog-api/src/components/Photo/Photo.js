import React from "react";

class Photo extends React.Component {
  async componentDidMount() {
    await this.props.fetchRandomDog("https://dog.ceo/api/breeds/image/random");
  }

  render() {
    return <img src={this.props.url} alt="dog"></img>;
  }
}

export default Photo;
