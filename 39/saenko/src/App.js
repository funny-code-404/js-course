import React from 'react';
import './App.css';
import Photo from './components/Photo';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    };

    this.getDogImg = this.getDogImg.bind(this);
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

  async getDogImg(breed) {
    try {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const dog = await res.json();
    this.setState({
        image: dog.message,
        loading: dog.status
    });
    console.log(`${breed} loaded`);
    } catch (error) {
        console.log(error);
    }
   
  }

  render () {
    return (
      <div className="App">
        <Navbar getDogImg={this.getDogImg}/>
        <Photo image={this.state.image} />
      </div>
    );
  }
}

export default App;
