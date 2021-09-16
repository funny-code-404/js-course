import React from 'react';
import './styles.css';

class Dog extends React.Component {
 // const { image } = this.props;
 
  handleClick = (event) => {
    const breedName = event.target.getAttribute('id');
    this.props.getImageOfRandomDog(breedName);
  }

  render() {
   
    return (
      <div className="container">
      <ul>
        <button id="akita" onClick={this.handleClick}>Akita</button> 
        <button id="chow" onClick={this.handleClick}>Chow</button>  
        <button id="boxer" onClick={this.handleClick}>Boxer</button>
        <button id="husky" onClick={this.handleClick}>Husky</button>
        <button id="mix" onClick={this.handleClick}>Mix</button>   
      </ul>
      </div>
    );
  }
}

export default Dog;
