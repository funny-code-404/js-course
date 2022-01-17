import React from "react";
import "./style.css";

const breeds = [
  {
    id: "akita",
    breed: "Akita",
  },
  {
    id: "chow",
    breed: "Chow",
  },
  {
    id: "boxer",
    breed: "Boxer",
  },
  {
    id: "husky",
    breed: "Husky",
  },
  {
    id: "mix",
    breed: "Mix",
  },
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = (e) => {
    const breed = e.target.getAttribute("id");
    this.props.getDogImg(breed);
  };

  render() {
    return (
      <nav>
        <ul className="nav-list" onClick={this.handleClick}>
          {breeds.map((breed) => {
            return (
              <li className="nav-item">
                <button className="nav-btn" id={breed.id}>
                  {breed.breed}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
