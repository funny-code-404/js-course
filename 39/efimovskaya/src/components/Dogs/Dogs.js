import React from 'react';
import './styles.css';
import {breeds} from './breeds'

class Dog extends React.Component {
  handleClick = (event) => {
    const breedName = event.target.getAttribute('id');
    this.props.getImageOfRandomDog(breedName);
    
  }

  render() {
   
    return (
      <div className="container">
     <ul className="nav-list" onClick={this.handleClick}>
                    {breeds.map((breed) => {
                        return <li className="nav-item"><button className="nav-btn" id={breed.id}>{breed.breed}</button></li>
                    })}
                </ul>
      </div>
    );
  }
}

export default Dog;
